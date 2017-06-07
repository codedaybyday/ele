<template>
    <div class="shop-header-container_qVoLT_0">
        <div class="shop-header-background_2cwiR_0"
             :style="{'background-image':`url(${decodeImgUrl(shop_info.image_path,'imageMogr/format/webp/thumbnail/!40p/blur/50x40/')}`}"></div>
        <nav class="shop-header-navBar_ibFIP_0"><a href="javascript:;" @click="back()">
            <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
            </svg>
        </a></nav>
        <div class="shop-header-main_1B2kH_0"><img class="shop-header-logo_3woDQ_0" :src="decodeImgUrl(shop_info.image_path,'imageMogr/format/webp/')">
            <div class="shop-header-content_3UjPs_0">
                <h2 class="shop-header-shopName_2QrHh_0">{{shop_info.name}}</h2>
                <p class="shop-header-delivery_1mcTe_0"><span class="shop-header-deliveryItem_Fari3_0">
            {{shop_info.delivery_mode&&shop_info.delivery_mode.text?shop_info.delivery_mode.text:'商家配送'}}
          </span> <span class="shop-header-deliveryItem_Fari3_0">
            {{shop_info.order_lead_time}}分钟送达
          </span> <span class="shop-header-deliveryItem_Fari3_0">
            {{shop_info.piecewise_agent_fee.description}}
          </span></p>
                <div class="shop-header-notice_2DzmG_0"><span>公告：</span> <span>
            {{shop_info.promotion_info}}
          </span></div>
            </div>
            <svg class="shop-header-detailIcon_1IXZI_0">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
        </div>
        <div class="shop-header-activities_3NWG9_0" v-if="shop_info.activities.length">
            <div class="activity-container_2EaDo_0 activity-containerNoWrap_2zBBg_0 shop-header-activityRow_fbfAg_0">
                <i class="activity-activityIcon_1iJyG_0"
                   style="color:#fff" :style="{background:shop_info.activities[0].icon_color}">
                    {{shop_info.activities[0].icon_name}}
                </i> <span class="activity-description_2q8qg_0"><span>{{shop_info.activities[0].description}}</span></span>
            </div>
            <div class="shop-header-activityCount_tCsbf_0">
                {{shop_info.activities.length}}个活动
            </div>
        </div>
    </div>
</template>
<style>
    .shop-header-navBar_ibFIP_0 svg {
        width: .666667rem;
        height: .666667rem;
        fill:#fff;
    }

    .shop-header-activityCount_tCsbf_0 .shop-header-arrow_1uhJg_0 {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        right: -.266667rem;
        height: .266667rem;
        width: .266667rem;
        fill: #fff
    }
    .shop-header-container_qVoLT_0 {
        position: relative;
        padding-bottom: .8rem;
        color: #fff;
        font-size: .293333rem
    }

    .shop-header-background_2cwiR_0 {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #3190e8;
        background-size: cover;
        background-repeat: no-repeat
    }

    .shop-header-background_2cwiR_0:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(119, 103, 137, .43)
    }

    .shop-header-navBar_ibFIP_0 {
        position: relative;
        padding: .106667rem .266667rem
    }

    .shop-header-main_1B2kH_0 {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex
    }

    .shop-header-logo_3woDQ_0 {
        width: 1.733333rem;
        height: 1.733333rem;
        border: 1px solid #fff;
        border-radius: .106667rem;
        margin: 0 .266667rem
    }

    .shop-header-content_3UjPs_0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: block;
        width: 0;
        padding-right: .133333rem
    }

    .shop-header-shopName_2QrHh_0 {
        margin: 0;
        font-size: .466667rem;
        line-height: .466667rem;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .shop-header-activities_3NWG9_0 {
        position: absolute;
        left: .266667rem;
        right: .346667rem;
        bottom: .133333rem
    }

    .shop-header-activityRow_fbfAg_0 {
        padding-right: 1.28rem
    }

    .shop-header-activityCount_tCsbf_0 {
        position: absolute;
        top: 0;
        right: 0
    }

    .shop-header-delivery_1mcTe_0 {
        white-space: nowrap;
        height: .666667rem;
        line-height: .72rem
    }

    .shop-header-deliveryItem_Fari3_0 {
        line-height: .32rem
    }

    .shop-header-deliveryItem_Fari3_0:not(:last-child):after {
        content: " / ";
        opacity: .5
    }

    .shop-header-notice_2DzmG_0 {
        height: .533333rem;
        line-height: .533333rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .shop-header-detailIcon_1IXZI_0 {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        right: .133333rem;
        height: .333333rem;
        width: .666667rem;
        fill: #fff
    }
</style>
<script>
    import {mapActions} from 'vuex';
    import decodeImgUrl from '../../utils/decodeImgUrl.js';
    export default{
        data(){
            return {
                shop_info:{
                    delivery_mode:{
                        text:''
                    },
                    piecewise_agent_fee:{},
                    activities:[],
                    image_path:''
                }
            };
        },
        methods:Object.assign(mapActions(['getShopInfo']),{
            back(){
                this.$router.go(-1);
            },
            decodeImgUrl:decodeImgUrl,
        }),
        computed:{
            /*is_openning:() => {
                let now = new Date()
            }*/
        },
        mounted(){
            const query = this.$route.query;
            this.getShopInfo({
                id:query.id,
                data: {
                    extras: ['activities', 'albums', 'license', 'identification']
                }
            }).then(msg => this.shop_info = msg);
        }
    }
</script>