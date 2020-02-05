<template>
    <div id="app-layout">
        <div class="fake-title-bar">
            <div class="fake-title-bar__title">
                EasyMeme
            </div>
            <div class="handle-bar">
                <i class="el-icon-minus" @click="minimizeWindow"></i>
                <i class="el-icon-circle-plus-outline" @click="openMiniWindow"></i>
                <i class="el-icon-close" @click="closeWindow"></i>
            </div>
        </div>
        <el-row style="padding-top: 22px;" class="main-content">
            <el-col :span="5" class="side-bar-menu">
                <el-menu
                        class="layout-sidebar"
                        :default-active="defaultActive"
                        @select="handleSelect"
                        :unique-opened="true"
                >
                    <el-menu-item index="memecreate">
                        <i class="el-icon-upload"></i>
                        <span slot="title">表情创作</span>
                    </el-menu-item>
                    <el-menu-item index="greener">
                        <i class="el-icon-picture"></i>
                        <span slot="title">贴吧绿</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="19" :offset="5">
                <router-view></router-view>
            </el-col>
        </el-row>

        <el-dialog
                title="提示"
                :visible.sync="showDialogBox"
                :modal-append-to-body="false"
        >
            <span>这是一段信息</span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "AppLayout",
        data() {
            return {
                showDialogBox: false,
                defaultActive: '',

            }
        },
        methods: {
            handleSelect(index) {
                this.$router.push({
                    name: index
                })
            },
            minimizeWindow() {
            },
            openMiniWindow() {
            },
            closeWindow() {
            },
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm => {
                vm.defaultActive = to.name
            })
        }
    }
</script>

<style lang="scss" scoped>
    .fake-title-bar {
        -webkit-app-region: drag;
        heightL: 22px;
        width: 100%;
        text-align: center;
        color: #eee;
        font-size: 12px;
        line-height: 22px;
        position: fixed;
    }
</style>