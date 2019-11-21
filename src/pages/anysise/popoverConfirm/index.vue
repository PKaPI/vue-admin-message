<template>
    <el-popover
        placement="top"
        width="260"
        :title="title"
        v-model="visible"
        >
        <div>{{content}}</div>
        <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="this.onCancel">取消</el-button>
            <el-button type="primary" size="mini" @click="this.onOk">确定</el-button>
        </div>
         <div slot="reference">
             <slot></slot>	
         </div>
        </el-popover>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      visible: false,
    };
  },
  props: {
    title: String,
    content:String
  },
  methods: {
      onCancel(){
        this.visible=false;
        this.$emit('onCancel');
      },
      onOk(){
        this.visible=false;
        this.$emit('onOk');
      }
  }
};
</script>
<style>
    .plan {
       cursor: pointer;
    }
</style>