<template>
    <div class="mb-layout-hd cmb-comm" alog-alias="mbox-header" monkey="mbox-header">
        <div class="top-banner">
            <div id="searchBar" style="left:556px">
                <div action="search">
                    <span class="ui-watermark-container ui-watermark-input">                        
                        <input @keyup.enter="search" v-model="keyWords" type="text" placeholder="输入歌曲、歌手、专辑名" size="24" class="sug-input" autocomplete="off" name="key" id="search-sug-input">
                    </span>
                    <input type="button" id="search-sug-submit" value="" @click="search">
                    <div class="sug-result" style="display: none;">
                        <p class="sug-source sug-quku">曲库搜索</p>
                        <dl class="sug-artist clearfix">
                            <dt class="sug-title clearfix">歌手</dt>
                        </dl>
                        <dl class="sug-song clearfix">
                            <dt class="sug-title clearfix">歌曲</dt>
                        </dl>
                        <dl class="sug-album clearfix">
                            <dt class="sug-title clearfix">专辑</dt>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import store from '../store/store'
import apiProxy from '../apiProxy'

export default {
  name: 'search-box',  
  data() {
    return {
        keyWords:'海'
    }
  },
  computed: {   
  },
  methods: {   
     search:async function(ev){
         console.log('execute searching')
         let datas = await apiProxy.search(this.keyWords)      
         store.state.songs.splice(0,store.state.songs.length,...(datas.data.song||[]))
      }
  },
  mounted:function(){
     
  }
}
</script>