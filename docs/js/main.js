(function() {

    $(() => {
        Vue.use(VueRouter);
        const router = new VueRouter({
           routes : [
               { path: '/', component: Home },
               { path: '/about', component: About },
               { path: '/img/:id', component: Image },
           ]
        });
        app = new Vue({router: router,
			el:"#app"})
    });
    Array.prototype.shuffle = function() {
      var i = this.length, j, temp;
      if ( i == 0 ) return this;
      while ( --i ) {
         j = Math.floor( Math.random() * ( i + 1 ) );
         temp = this[i];
         this[i] = this[j];
         this[j] = temp;
      }
      return this;
    }


    Vue.component('nta-header',{
        template:`
        <div>
        <div class='title'>
        nick & luke
        </div>
        <div>october 1, 2022 | watertown, ma</div>
        <br>
        </div>
        `
    });
    var About = Vue.component('nta-aboutme', {
		template: `<div>
        <br>
        <br>
        <p>We're so glad to celebrate our wedding with you next year.</p>
        <p>We met at a potluck dinner years ago here in Cambridge, and it feels right to bring all our favorite people together in this place where we've built our home and lives.</p>
        <p>There will be information here regarding lodging, logistics, and more soon. But for now, we're so excited to see you at the Commander's Masion in Watertown on October 1, 2022.</p>
        <br>
        <router-link class='nav' to="/">back</router-link>
		</div>`
	})

    var Image = Vue.component('nta-image', {
        template: `<div>
        <img class='bigimg' @click="clickimage" v-bind:src='"img/" + $route.params.id'>
        
        </div>
        `,
        methods: {
            clickimage: function() {
                this.$router.push("/");
            }
        }
    })
	
    var Home = Vue.component('nta-home', {
        template: `<div>
        <div class="middlestuff">
        <div class='icons'><router-link class='nav' to="/about">about</router-link></p></div>
        <div class='home'>
        <div v-for="i in images"><img @click="clickimage(i)" class='instaimg' v-bind:style="i['style']" v-bind:src="i['url']"></div>
        </div>
		<div class="icons">
        <p align='right'>
        </p>
		</div>
        </div>
        </div>`,
        data: function() {
            return {
                images: [],
                desired_images: this.determine_desired_images(),
                allowed_deviation_from_square: 0.01,
                wait_for_backfill: 1000,
            }
        },
        methods: {
            clickimage: function(i) {
                this.$router.push(i.url);
                },
            determine_desired_images: function() {
                // Probably better place/way to do this
                if (screen.width < 400) {
                    return 4;
                }
                return 10;
            },
            is_approximately_square: function(x, y) {
                var ratio = x / y;
                var deviation = Math.abs(1 - ratio);
                return deviation < this.allowed_deviation_from_square;
            },
            image_object: function(url) {
                var style = 'width:' + 100 / this.desired_images + '%';
                return {"url":url, "style":style}
            },
            backfill_images: function() {
                var default_nums = [];
                for (var i=0; i<this.desired_images; i++)
                    default_nums.push(i);
                default_nums.shuffle();

                default_nums.forEach( (i) => {
                    if (this.images.length < this.desired_images) {
                        this.images.push(this.image_object("/img/" + i + ".jpg"))
                    }
                });

            }
        },
        mounted: function() {
            //this.update_images();
            this.backfill_images();

			// After 3 seconds, backfill missing images
            // This is in case insta is down, or, more likely, have changed
            // the format of their page such that the parsing of urls breaks.
            //setTimeout(function() {
            //        this.backfill_images();
            //}.bind(this), this.wait_for_backfill);
            //this.update_images();
        }
    })



})();
