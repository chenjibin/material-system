<template>
  <div class="wrapper">
    <section id="content">
      <div id="bd" v-html='ripeTxt'></div>
    </section>
    <el-button type="primary" @click="look">继续编辑</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        scrollTrigger: false
      }
    },
    mounted() {
      KISSY.use('node,dom,button, dd,switchable, resizable,ua,event,overlay,json,ajax',
        function (S, Node, Dom, Button, DD, Switchable, Resizable, UA, Event, Overlay, JSON, Ajax, EasyCountdown) {
          S.ready(function () {
            setTimeout(function () {
              S.all('.J_TWidget').each(function (v, k) {
                try {
                  let t = v.attr('data-widget-type')
                  let c = v.attr('data-widget-config')
                  let cfg = c ? S.JSON.parse(c.replace(/'/ig, '"')) : 0
                  if (cfg) {
                    cfg.srcNode = v
                    if (t === 'Slide') new Switchable.Slide(v, cfg)
                    else if (t === 'Carousel') new Switchable.Carousel(v, cfg)
                    else if (t === 'Popup') {
                      cfg.triggerType = 'mouse'
                        window.popup = new Overlay.Popup(cfg)
                      new Overlay.Popup(cfg)
                    } else if (t === 'Tabs') new Switchable.Tabs(v, cfg)
                    else if (t === 'Accordion') new Switchable.Accordion(v, cfg)
                    else if (t === 'Countdown') new EasyCountdown(v, cfg.endTime, cfg)
                  }
                } catch (ex) {
                  console && console.error(ex)
                } finally {
                }
              })
            }, 300)
          })
        })
    },
    methods: {
      look() {
        this.$router.push({path: 'inputer'})
      }
    },
    computed: {
      ripeTxt() {
        return this.$store.getters.articleMd
      }
    }
  }
</script>
<style scoped lang="less">
  #bd {
    width: 100%;
  }
  #content {
    margin-bottom: 10px;
  }
  .wrapper {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
