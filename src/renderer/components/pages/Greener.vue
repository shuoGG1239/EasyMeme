<template>
    <div>
        <el-row>
            <el-col>
                <div id="img-in"></div>
            </el-col>
            <el-col>
                <div id="img-out"></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-button @click="handleBtnClick">
                    <input type="file" id="imageLoader" accept="image/*"/>
                </el-button>
            </el-col>
            <el-col>
                <div class="block">
                    <span class="demonstration">iter</span>
                    <el-slider v-model="iter"></el-slider>
                </div>
            </el-col>
            <el-col>
                <div class="block">
                    <span class="demonstration">quality</span>
                    <el-slider v-model="quality"></el-slider>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Greener",
        data() {
            return {
                iter: 16,
                quality: 75,
            }
        },
        methods: {
            handleBtnClick() {
            }
        },
        mounted() {
            const canvas = document.createElement("canvas");
            const canvasCtx = canvas.getContext("2d");
        }
    }
</script>

<style lang="scss" scoped>
</style>