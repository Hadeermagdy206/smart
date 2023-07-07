<template>
    <header class="sticky">
        <div class="container">
            <div class="row">
                <!-- Col -->
                <div class="col-md-12">
                    <div class="head-inner">
                        <div class="logo">
                            <a href="#" title="#">
                                <img loading="lazy" src="../../assets/images/logo.png" alt="#" />
                            </a>
                        </div>
                        <div class="menu-left">
                            <nav>
                                <ul>
                                    <li>
                                        <router-link to="/" class="nav-link" active-class="active" exact href="#">{{ $t('home') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/about" class="nav-link" active-class="active" exact href="#">About Us</router-link>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <router-link to="/services" class="nav-link" active-class="active" exact href="#">Services</router-link>
                                        <ul class="sub-menu">
                                            <li class="menu-item-has-children">
                                                <a href="#">GEOSPATIAL SOLUTIONS</a>
                                                <ul class="sub-menu">
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="#">GEOSPATIAL SOLUTIONS</a>
                                                <ul class="sub-menu">
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="#">GEOSPATIAL SOLUTIONS</a>
                                                <ul class="sub-menu">
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="#">GEOSPATIAL SOLUTIONS</a>
                                                <ul class="sub-menu">
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="#">GEOSPATIAL SOLUTIONS</a>
                                                <ul class="sub-menu">
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">GIS</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <router-link to="/studies" class="nav-link" active-class="active" exact href="#">Our Case Studies</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/clients" class="nav-link" active-class="active" exact href="#">Our Clients</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/faq" class="nav-link" active-class="active" exact href="#">FAQ</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/blogs" class="nav-link" active-class="active" exact href="#">Blog</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/contact" class="nav-link" active-class="active" exact href="#">Contact Us</router-link>
                                    </li>
                                </ul>
                            </nav>
<!-- 
                            <a href="#" class="lang" title="#">
                                <i class="fa fa-globe"></i>
                                <span></span>
                            </a> -->

                            <a class="lang" href="#" v-if="lang == 'ar'">
                                <span @click="changeLocaleEn">English</span>
                                <!-- <select class="custom-select" v-model="lang" @change="handleChange($event)">
                                <option value="en">English</option>
                                <option value="ar"> Arabic</option>
                                </select> -->
                            </a>
                            <a class="lang" href="#" v-else>
                                <span @click="changeLocaleAr" class="arabic">عربي</span>
                                <!-- <select class="custom-select" v-model="lang" @change="handleChange($event)">
                                <option value="en">English</option>
                                <option value="ar"> Arabic</option>
                                </select> -->
                            </a>

                            <div id="openMenu">
                                <i class="fal fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Col -->
            </div>
        </div>

        <!-- Start Sidebar -->
        <div class="overlay-sidebar"></div>
        <div class="sidebar">
            <div class="sidebar-inner">
                <div class="sidear-close-btn">
                    <i class="fal fa-close"></i>
                </div>
                <div class="sidebar-logo">
                    <a href="#" class="logo-sidebar" rel="#">
                        <img src="assets/images/logo.png" alt="#" loading="lazy" />
                    </a>
                </div>
                <div class="sidebar-menu">
                    <ul>
                        <li>
                            <a href="#" title="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" title="#">
                                About Us
                            </a>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#" title="#" class="link-h">
                                Services
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="#">Boosts Your Website Traffic</a>
                                </li>
                                <li>
                                    <a href="#">PPC Services</a>
                                </li>
                                <li>
                                    <a href="#">SEO Services</a>
                                </li>
                                <li>
                                    <a href="#">SMM Services</a>
                                </li>
                                <li>
                                    <a href="#">Web Design and Development</a>
                                </li>
                                <li>
                                    <a href="#">Social Media Management</a>
                                </li>
                                <li>
                                    <a href="#">Content Creation</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" title="#">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" title="#">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- End Sidebar -->
    </header>
</template>


<script>
export default {
  name: "navbar",
  data() {
    const lang = localStorage.getItem("lang") || "en";
    const authToken = localStorage.getItem("authToken");
    return {

      programs: [],
      logo: "",
      variant: "dark",
      authToken: authToken,
      lang: lang,
      scTimer: 0,
      scY: 0,
    };
  },
  methods: {

    async Programs() {

      await this.$http.get('nav-programs').then(res => {
        this.logo = res.data.data.logo.image;
        this.programs = res.data.data.programs;

      }).catch(error => {
        console.log(error.response.data.message)
      })

    },

    changeLocaleEn() {
      localStorage.setItem("lang", "en"); 
      window.location.reload();
    },
    changeLocaleAr() {
      localStorage.setItem("lang", "ar");
      window.location.reload();
    },
    // handleChange(event) {
    //   localStorage.setItem("lang", event.target.value);
    //   window.location.reload();
    // },
  },
  mounted() {
    switch (this.lang) {
      case "ar": {
        import("@/assets/css/style-ar.css");
        break;
      }
      case "en": {
        import("@/assets/css/style-en.css");
        break;
      }
    }
  },
};
</script>