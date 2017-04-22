<template>
    <div data-v-65e2dd3c="">
        <div class="shop-tab-container_3skq8_0">
            <div class="shop-tab-tab_r4SDi_0 shop-tab-active_ZY0C0_0"><span class="shop-tab-title_1crD1_0">商品</span>
            </div>
            <div class="shop-tab-tab_r4SDi_0"><span class="shop-tab-title_1crD1_0">评价</span></div>
        </div>
        <div class="menuview-2hUkG" style="height: 982px;">
            <div class="menuview-2iJo3" style="display: none;"><img
                    src="//github.elemecdn.com/eleme/fe-static/1cb05f59/media/empty/no-food.png">
                <p>没有商品</p>
                <p>该商家还未上传商品</p></div>
            <div class="menuview-17K3g">
                <main class="menuview-i6fQ3">
                    <ul class="menucategory-29kyE menuview-2_lFf" category-index="1">
                        <li v-for="item in menu" class="menucategory-JnDmc menucategory-2MBNs menucategory-3e27M"><img
                                v-if="item.icon_url" :src="decodeImgUrl(item.icon_url)"
                                class="menucategory-375ij"> <span class="menucategory-qwsbd">{{item.name}}</span></li>
                    </ul>
                    <section data-v-81584c58="" class="container menuview-JqDMu" category-index="1">
                        <div data-v-81584c58="" class="scroller">
                            <dl data-v-81584c58="" class="" v-for="item in menu">
                                <dt data-v-81584c58="">
                                    <div data-v-81584c58="" class="category-title">
                                        <strong data-v-81584c58="" class="category-name">{{item.name}}</strong>
                                        <span data-v-81584c58="" class="category-description">{{item.description}}</span>
                                    </div>
                                    <div data-v-81584c58="" class="category-more"><span data-v-81584c58="" class="icon"></span>
                                        <p data-v-81584c58="" transition="popup" class="popup" style="display: none;">
                                            <span data-v-81584c58="">{{item.name}}</span>
                                            <span data-v-81584c58="">{{item.description}}</span>
                                        </p>
                                    </div>
                                </dt>
                                <dd data-v-81584c58="" :class="{new:isNew(food)}" v-for="food in item.foods">
                                    <span data-v-81584c58="" class="foodimg">
                                        <img data-v-81584c58="" :src="decodeImgUrl(food.image_path,'imageMogr/thumbnail/140x140/format/webp/quality/85')">
                                    </span>
                                    <section data-v-81584c58="" class="foodinfo">
                                        <header data-v-81584c58="" class="foodtitle">
                                            <span data-v-81584c58="">{{food.name}}</span>
                                        </header>
                                        <p data-v-81584c58="" class="fooddescription">{{food.description}}</p>
                                        <p data-v-81584c58="" class="foodsales">
                                            <span data-v-81584c58="">月售{{food.month_sales}}份</span>
                                            <span data-v-81584c58="">好评率{{food.satisfy_rate}}%</span>
                                        </p>
                                        <strong data-v-81584c58="" class="foodprice">
                                            <span data-v-81584c58="">{{food.specfoods[0].price}}</span>
                                        </strong>
                                        <div data-v-81584c58="" class="cartbutton">
                                            <span data-v-81584c58="">
                                                <span class="cartbutton-2tycR">
                                                    <a href="javascript:" disabled="disabled"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use></svg>
                                                    </a>
                                                </span>
                                            </span>
                                        </div>
                                    </section>
                                </dd>
                            </dl>
                        </div>
                        <div data-v-81584c58=""></div>
                    </section>
                </main>
                <aside class="menuview-2bWpI">商家休息中,暂不接单
                </aside>
            </div>
        </div>
        <div class="index-container_GB9-L_0" style="display: none; height: 982px;">
            <section class="overview-container_3D2TN_0">
                <div class="overview-col1_28mQz_0"><strong class="overview-overallScore_1gbf5_0">4.6</strong>
                    <div>综合评价</div>
                    <p class="overview-small_3zU_U_0">高于周边商家65.1%</p></div>
                <div class="overview-col2_1_8Bk_0">
                    <div class="overview-line_36TKo_0"><span>服务态度</span> <span class="overview-lineContent_3LAEC_0"><div
                            class="rating-wrapper_36aX1_0"><div class="rating-max_1MKzt_0"><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg></div> <div
                            class="rating-rating_1ZAfX_0" style="width: 91.7846%;"><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg></div></div> <span
                            class="overview-lineScore_FKvKk_0">4.6</span></span></div>
                    <div class="overview-line_36TKo_0"><span>菜品评价</span> <span class="overview-lineContent_3LAEC_0"><div
                            class="rating-wrapper_36aX1_0"><div class="rating-max_1MKzt_0"><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg></div> <div
                            class="rating-rating_1ZAfX_0" style="width: 93.7314%;"><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use
                            xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg></div></div> <span
                            class="overview-lineScore_FKvKk_0">4.7</span></span></div>
                    <div class="overview-line_36TKo_0"><span>送达时间</span> <span
                            class="overview-lineContent_3LAEC_0 overview-small_3zU_U_0">
        31分钟
      </span></div>
                </div>
            </section>
            <section class="index-rateDetail_3mb4t_0">
                <div class="index-tagBlock_1B49c_0">
                    <ul>
                        <li class="rating-tags-item_2MAXu_0 rating-tags-active_1Q92x_0">
                            全部(823)
                        </li>
                        <li class="rating-tags-item_2MAXu_0">
                            满意(789)
                        </li>
                        <li class="rating-tags-item_2MAXu_0 rating-tags-unsatisfied_hoXde_0">
                            不满意(34)
                        </li>
                        <li class="rating-tags-item_2MAXu_0">
                            有图(18)
                        </li>
                        <li class="rating-tags-item_2MAXu_0">
                            味道好(65)
                        </li>
                        <li class="rating-tags-item_2MAXu_0">
                            送货快(50)
                        </li>
                        <li class="rating-tags-item_2MAXu_0">
                            干净卫生(44)
                        </li>
                        <li class="rating-tags-item_2MAXu_0">
                            食材新鲜(32)
                        </li>
                        <li class="rating-tags-item_2MAXu_0">
                            分量足(31)
                        </li>
                        <li class="rating-tags-item_2MAXu_0">
                            包装精美(29)
                        </li>
                        <li class="rating-tags-item_2MAXu_0">
                            服务不错(29)
                        </li>
                        <li class="rating-tags-item_2MAXu_0">
                            物美价廉(27)
                        </li>
                    </ul>
                </div>
                <ul infinite-scroll-distance="20">
                    <li class="index-comment_3xWea_0">
                        <div class="comment-block-container_2KCP2_0">
                            <small class="comment-block-time_uW1Rk_0">2017-04-09</small>
                            <img src="//fuss10.elemecdn.com/5/0a/11130501c383e5c31e9564443c2a8jpeg.jpeg?imageMogr/format/webp/"
                                 class="comment-block-avatar_jhxbX_0">
                            <div class="comment-block-content_3gX7e_0"><h3 class="comment-block-username_2KPtB_0">
                                凌***猫</h3>
                                <div class="rating-wrapper_36aX1_0">
                                    <div class="rating-max_1MKzt_0">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                    <div class="rating-rating_1ZAfX_0" style="width: 100%;">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                </div>
                                <span class="comment-block-rating_2xaJx_0"></span>
                                <ul class="comment-block-photos_2MUUP_0">
                                    <li><img width="142" height="142"
                                             src="//fuss10.elemecdn.com/d/4a/c653c48ea7157a125c836d8136948jpeg.jpeg?imageMogr/format/webp/">
                                    </li>
                                </ul>
                                <div>
                                    <ul class="comment-block-foods_3a4co_0">
                                        <li>鸡丝凉面</li>
                                        <li>红糖软糍粑</li>
                                        <li>手工红糖枣香粽</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="index-comment_3xWea_0">
                        <div class="comment-block-container_2KCP2_0">
                            <small class="comment-block-time_uW1Rk_0">2017-04-03</small>
                            <img src="//fuss10.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?imageMogr/format/webp/"
                                 class="comment-block-avatar_jhxbX_0">
                            <div class="comment-block-content_3gX7e_0"><h3 class="comment-block-username_2KPtB_0">
                                匿名用户</h3>
                                <div class="rating-wrapper_36aX1_0">
                                    <div class="rating-max_1MKzt_0">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                    <div class="rating-rating_1ZAfX_0" style="width: 100%;">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                </div>
                                <span class="comment-block-rating_2xaJx_0"></span>
                                <ul class="comment-block-photos_2MUUP_0">
                                    <li><img width="142" height="142"
                                             src="//fuss10.elemecdn.com/2/67/d4aa569dddaa2f1b2c26d2f57fb9cjpeg.jpeg?imageMogr/format/webp/">
                                    </li>
                                    <li><img width="142" height="142"
                                             src="//fuss10.elemecdn.com/8/a3/07cad78df73ae41462f84787adb77jpeg.jpeg?imageMogr/format/webp/">
                                    </li>
                                </ul>
                                <div>
                                    <ul class="comment-block-foods_3a4co_0">
                                        <li>土豆烧牛肉</li>
                                        <li>白灼芥蓝</li>
                                        <li>红油水饺</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="index-comment_3xWea_0">
                        <div class="comment-block-container_2KCP2_0">
                            <small class="comment-block-time_uW1Rk_0">2017-03-29</small>
                            <img src="//fuss10.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?imageMogr/format/webp/"
                                 class="comment-block-avatar_jhxbX_0">
                            <div class="comment-block-content_3gX7e_0"><h3 class="comment-block-username_2KPtB_0">
                                匿名用户</h3>
                                <div class="rating-wrapper_36aX1_0">
                                    <div class="rating-max_1MKzt_0">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                    <div class="rating-rating_1ZAfX_0" style="width: 100%;">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                </div>
                                <span class="comment-block-rating_2xaJx_0"></span>
                                <div class="comment-block-text_1GGd4_0">就是桃胶那个太少了</div>
                                <div class="comment-block-reply_34G3e_0">商家回复：亲您好，我们的菜品是按标准出餐的</div>
                                <ul class="comment-block-photos_2MUUP_0">
                                    <li><img width="142" height="142"
                                             src="//fuss10.elemecdn.com/6/3b/6c6942a4c76e4267fe83ddae61061jpeg.jpeg?imageMogr/format/webp/">
                                    </li>
                                    <li><img width="142" height="142"
                                             src="//fuss10.elemecdn.com/6/3b/6c6942a4c76e4267fe83ddae61061jpeg.jpeg?imageMogr/format/webp/">
                                    </li>
                                </ul>
                                <div>
                                    <ul class="comment-block-foods_3a4co_0">
                                        <li>鸡丝凉面</li>
                                        <li>天山雪莲炖桃胶</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="index-comment_3xWea_0">
                        <div class="comment-block-container_2KCP2_0">
                            <small class="comment-block-time_uW1Rk_0">2017-04-14</small>
                            <img src="//fuss10.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?imageMogr/format/webp/"
                                 class="comment-block-avatar_jhxbX_0">
                            <div class="comment-block-content_3gX7e_0"><h3 class="comment-block-username_2KPtB_0">
                                匿名用户</h3>
                                <div class="rating-wrapper_36aX1_0">
                                    <div class="rating-max_1MKzt_0">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                    <div class="rating-rating_1ZAfX_0" style="width: 100%;">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                </div>
                                <span class="comment-block-rating_2xaJx_0"></span>
                                <div></div>
                            </div>
                        </div>
                    </li>
                    <li class="index-comment_3xWea_0">
                        <div class="comment-block-container_2KCP2_0">
                            <small class="comment-block-time_uW1Rk_0">2017-04-14</small>
                            <img src="//fuss10.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?imageMogr/format/webp/"
                                 class="comment-block-avatar_jhxbX_0">
                            <div class="comment-block-content_3gX7e_0"><h3 class="comment-block-username_2KPtB_0">
                                匿名用户</h3>
                                <div class="rating-wrapper_36aX1_0">
                                    <div class="rating-max_1MKzt_0">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                    <div class="rating-rating_1ZAfX_0" style="width: 100%;">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                </div>
                                <span class="comment-block-rating_2xaJx_0"></span>
                                <div></div>
                            </div>
                        </div>
                    </li>
                    <li class="index-comment_3xWea_0">
                        <div class="comment-block-container_2KCP2_0">
                            <small class="comment-block-time_uW1Rk_0">2017-04-14</small>
                            <img src="//fuss10.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?imageMogr/format/webp/"
                                 class="comment-block-avatar_jhxbX_0">
                            <div class="comment-block-content_3gX7e_0"><h3 class="comment-block-username_2KPtB_0">
                                匿名用户</h3>
                                <div class="rating-wrapper_36aX1_0">
                                    <div class="rating-max_1MKzt_0">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                    <div class="rating-rating_1ZAfX_0" style="width: 100%;">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                </div>
                                <span class="comment-block-rating_2xaJx_0">按时送达</span>
                                <div></div>
                            </div>
                        </div>
                    </li>
                    <li class="index-comment_3xWea_0">
                        <div class="comment-block-container_2KCP2_0">
                            <small class="comment-block-time_uW1Rk_0">2017-04-14</small>
                            <img src="//fuss10.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?imageMogr/format/webp/"
                                 class="comment-block-avatar_jhxbX_0">
                            <div class="comment-block-content_3gX7e_0"><h3 class="comment-block-username_2KPtB_0">
                                匿名用户</h3>
                                <div class="rating-wrapper_36aX1_0">
                                    <div class="rating-max_1MKzt_0">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                    <div class="rating-rating_1ZAfX_0" style="width: 100%;">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                </div>
                                <span class="comment-block-rating_2xaJx_0"></span>
                                <div>
                                    <ul class="comment-block-foods_3a4co_0">
                                        <li>小笼牛肉</li>
                                        <li>烤藕片/串</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="index-comment_3xWea_0">
                        <div class="comment-block-container_2KCP2_0">
                            <small class="comment-block-time_uW1Rk_0">2017-04-14</small>
                            <img src="//fuss10.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?imageMogr/format/webp/"
                                 class="comment-block-avatar_jhxbX_0">
                            <div class="comment-block-content_3gX7e_0"><h3 class="comment-block-username_2KPtB_0">
                                匿名用户</h3>
                                <div class="rating-wrapper_36aX1_0">
                                    <div class="rating-max_1MKzt_0">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                    <div class="rating-rating_1ZAfX_0" style="width: 100%;">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                </div>
                                <span class="comment-block-rating_2xaJx_0"></span>
                                <div>
                                    <ul class="comment-block-foods_3a4co_0">
                                        <li>花生包</li>
                                        <li>小笼牛肉</li>
                                        <li>白灼芥蓝</li>
                                        <li>特色炒饭</li>
                                        <li>鸡丝凉面</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="index-comment_3xWea_0">
                        <div class="comment-block-container_2KCP2_0">
                            <small class="comment-block-time_uW1Rk_0">2017-04-14</small>
                            <img src="//fuss10.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?imageMogr/format/webp/"
                                 class="comment-block-avatar_jhxbX_0">
                            <div class="comment-block-content_3gX7e_0"><h3 class="comment-block-username_2KPtB_0">
                                匿名用户</h3>
                                <div class="rating-wrapper_36aX1_0">
                                    <div class="rating-max_1MKzt_0">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                    <div class="rating-rating_1ZAfX_0" style="width: 100%;">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                </div>
                                <span class="comment-block-rating_2xaJx_0"></span>
                                <div>
                                    <ul class="comment-block-foods_3a4co_0">
                                        <li>鸡丝凉面</li>
                                        <li>烤鱿鱼/串</li>
                                        <li>绿豆粥</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="index-comment_3xWea_0">
                        <div class="comment-block-container_2KCP2_0">
                            <small class="comment-block-time_uW1Rk_0">2017-04-14</small>
                            <img src="//fuss10.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?imageMogr/format/webp/"
                                 class="comment-block-avatar_jhxbX_0">
                            <div class="comment-block-content_3gX7e_0"><h3 class="comment-block-username_2KPtB_0">
                                匿名用户</h3>
                                <div class="rating-wrapper_36aX1_0">
                                    <div class="rating-max_1MKzt_0">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                    <div class="rating-rating_1ZAfX_0" style="width: 100%;">
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xlink:href="#rating-star"></use>
                                        </svg>
                                    </div>
                                </div>
                                <span class="comment-block-rating_2xaJx_0"></span>
                                <div>
                                    <ul class="comment-block-foods_3a4co_0">
                                        <li>干臊面</li>
                                        <li>眉州老面手工包子</li>
                                        <li>南瓜糕</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<style>
    .shop-tab-container_3skq8_0 {
        line-height: 1.2rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        background-color: #fff
    }

    .shop-tab-tab_r4SDi_0 {
        position: relative;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: block;
        width: 0;
        text-align: center;
        font-size: .373333rem;
        color: #666;
        border-bottom: 1px solid #ddd
    }

    .shop-tab-active_ZY0C0_0 {
        color: #3190e8
    }

    .shop-tab-active_ZY0C0_0 .shop-tab-title_1crD1_0 {
        position: relative
    }

    .shop-tab-active_ZY0C0_0 .shop-tab-title_1crD1_0:after {
        content: "";
        position: absolute;
        bottom: -.16rem;
        left: -.066667rem;
        right: -.066667rem;
        height: .053333rem;
        background-color: #3190e8;
        border-radius: .04rem
    }

    .menucategory-29kyE {
        overflow-y: auto;
        height: 100%;
        background-color: #f8f8f8;
        -webkit-overflow-scrolling: touch
    }

    .menucategory-3e27M {
        position: relative;
        padding: .466667rem .2rem;
        border-bottom: 1px solid #ededed;
        font-size: .346667rem;
        color: #666
    }

    .menucategory-3e27M.menucategory-JnDmc {
        background-color: #fff;
        border-right-color: #fff;
        font-weight: bolder
    }

    .menucategory-3e27M.menucategory-JnDmc:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: .08rem;
        background-color: #3190e8
    }

    .menucategory-3e27M:not(.menucategory-2MBNs) .menucategory-qwsbd {
        line-height: 1.2em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical
    }

    .menucategory-28BIn {
        position: absolute;
        right: .08rem;
        top: .08rem;
        color: #fff;
        background-color: #ff461d;
        border-radius: .2rem;
        font-size: .266667rem;
        font-weight: 700;
        text-align: center;
        min-width: .373333rem;
        padding: 0 .106667rem;
        line-height: .373333rem
    }

    .menucategory-375ij {
        width: .24rem;
        height: .333333rem
    }

    .container[data-v-81584c58] {
        position: relative;
        height: 100%
    }

    .container .scroller[data-v-81584c58] {
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch
    }

    dl.onlyddst dd[data-v-81584c58] {
        margin-left: 0;
        box-shadow: 0 1px 0 0 #ddd
    }

    dl.onlylist .foodprice[data-v-81584c58] {
        font-size: .533333rem
    }

    dl.onlylist .foodimg[data-v-81584c58] {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 2.133333rem;
        height: 2.133333rem
    }

    dl.onlylist .foodtitle[data-v-81584c58] {
        font-size: .48rem
    }

    dl.onlylist dd[data-v-81584c58] {
        padding: .333333rem;
        min-height: none
    }

    dl[data-v-81584c58] {
        margin: 0
    }

    dd[data-v-81584c58] {
        position: relative;
        background-color: #fff;
        margin: 0;
        padding: .4rem .266667rem;
        margin-bottom: 1px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        min-height: 2.933333rem
    }

    dd[data-v-81584c58]:not(:last-child) {
        box-shadow: .4rem .013333rem 0 0 #ddd
    }

    dd.new[data-v-81584c58]:before {
        content: "";
        background-image: -webkit-linear-gradient(315deg, #4cd964 50%, transparent 0);
        background-image: linear-gradient(135deg, #4cd964 50%, transparent 0);
        position: absolute;
        width: .746667rem;
        height: .746667rem;
        z-index: 1;
        left: 0;
        top: -1px;
        font-weight: 700;
        font-size: .24rem
    }

    dd.new[data-v-81584c58]:after {
        content: "\65B0\54C1";
        z-index: 2;
        position: absolute;
        left: .013333rem;
        top: .12rem;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        color: #fff;
        font-size: .226667rem
    }

    dt[data-v-81584c58] {
        position: relative;
        padding: .2rem .266667rem;
        background-color: #f1f1f1
    }

    .category-title[data-v-81584c58] {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        overflow: hidden
    }

    .category-title strong[data-v-81584c58] {
        margin-right: .133333rem;
        font-weight: 700;
        font-size: .373333rem;
        color: #666;
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none
    }

    .category-title span[data-v-81584c58] {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: block;
        width: 0;
        color: #999;
        font-size: .266667rem;
        white-space: nowrap;
        overflow: hidden
    }

    .category-more .icon[data-v-81584c58] {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: .933333rem;
        z-index: 2;
        background: #f1f1f1 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAAAXNSR0IArs4c6QAAAFhJREFUOBFjYBgFoyEwGgKMs2bN8gQGwyxoUKQBwXZswUKuOhaQ4f///5cBGcrIyAiySBbExgLIUseExSCqCoEsSAO6/AkIg9h4TKe2OjxWjUqNhsDwCgEACvMiGUpibN4AAAAASUVORK5CYII=) 50% no-repeat;
        background-size: .32rem auto
    }

    .category-more .popup[data-v-81584c58] {
        position: absolute;
        background-color: #39373a;
        opacity: .97;
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: top right;
        transform-origin: top right;
        width: 63%;
        right: .133333rem;
        z-index: 3;
        color: #eee;
        font-size: .32rem;
        border-radius: .106667rem;
        padding: .24rem .266667rem;
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        cursor: pointer
    }

    .category-more .popup[data-v-81584c58]:before {
        content: "";
        position: absolute;
        top: 0;
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        right: .266667rem;
        border: .133333rem solid transparent;
        border-bottom-color: #39373a
    }

    .category-more .popup span[data-v-81584c58]:first-child {
        color: #fff
    }

    .category-more .popup-enter[data-v-81584c58], .category-more .popup-leave[data-v-81584c58] {
        opacity: 0 !important;
        -webkit-transform: scale(.5) !important;
        transform: scale(.5) !important
    }

    .category-more[data-v-81584c58]:after {
        content: "";
        position: absolute
    }

    .cartbutton[data-v-81584c58] {
        position: absolute;
        right: 0;
        bottom: -.066667rem
    }

    .foodimg[data-v-81584c58] {
        margin-right: 4%;
        -webkit-box-flex: 2;
        -ms-flex: 2;
        flex: 2;
        display: block;
        width: 0;
        vertical-align: top
    }

    .foodimg img[data-v-81584c58] {
        width: 100%;
        border-radius: .053333rem
    }

    .foodinfo[data-v-81584c58] {
        position: relative;
        -webkit-box-flex: 8;
        -ms-flex: 8;
        flex: 8;
        display: block;
        width: 0;
        padding-bottom: .666667rem
    }

    .foodtitle[data-v-81584c58] {
        font-size: .4rem;
        font-weight: 700;
        line-height: 1.1;
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between
    }

    .foodtitle span[data-v-81584c58] {
        vertical-align: middle
    }

    .foodattributes[data-v-81584c58] {
        line-height: .32rem;
        margin-left: .24rem;
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none
    }

    .foodattributes span[data-v-81584c58] {
        display: inline-block;
        vertical-align: middle;
        padding: .04rem .066667rem;
        line-height: 100%;
        text-align: center;
        border: 1px solid currentColor;
        color: #fff;
        font-size: .213333rem;
        border-radius: .266667rem
    }

    .foodattributes span[data-v-81584c58]:not(:last-child) {
        margin-right: .08rem
    }

    .quantity-tip[data-v-81584c58] {
        background-color: #ff461d;
        border-radius: .053333rem;
        font-size: .266667rem;
        color: #fff;
        padding: .026667rem .066667rem;
        vertical-align: middle
    }

    .fooddescription[data-v-81584c58] {
        margin: .133333rem 0;
        font-size: .253333rem;
        color: #999
    }

    .foodsales[data-v-81584c58] {
        margin: .173333rem 0;
        color: #666;
        font-size: .293333rem;
        line-height: 1
    }

    .foodsales p[data-v-81584c58] {
        margin-right: .106667rem
    }

    .foodsales span[data-v-81584c58] {
        vertical-align: middle
    }

    .foodsales > span[data-v-81584c58]:not(:first-child) {
        margin-left: .106667rem;
        vertical-align: middle
    }

    .foodactivity[data-v-81584c58] {
        font-size: .32rem;
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: left;
        transform-origin: left;
        white-space: nowrap
    }

    .foodactivity span[data-v-81584c58] {
        display: inline-block
    }

    .foodactivity span[data-v-81584c58]:first-child {
        border: 1px solid currentColor
    }

    .foodactivity span[data-v-81584c58]:nth-of-type(2) {
        color: #fff;
        border: 1px solid currentColor
    }

    .foodprice[data-v-81584c58] {
        position: absolute;
        left: 0;
        bottom: 0;
        font-weight: 700;
        font-size: .426667rem;
        line-height: .426667rem;
        color: #f60
    }

    .foodprice[data-v-81584c58]:before {
        font-weight: 400;
        content: "\A5";
        font-size: .293333rem;
        display: inline-block
    }

    .foodprice-lowest[data-v-81584c58] {
        margin-left: .053333rem;
        font-size: .32rem;
        color: #666;
        font-weight: 400
    }

    .foodprice-origin[data-v-81584c58] {
        font-size: .32rem;
        color: #999;
        font-weight: 400;
        vertical-align: top
    }

    .menuview-2hUkG {
        height: 100%;
        box-sizing: border-box
    }

    .menuview-2hUkG *, :after, :before {
        box-sizing: inherit
    }

    .menuview-2hUkG h3, .menuview-2hUkG p, .menuview-2hUkG ul {
        margin: 0
    }

    .menuview-2hUkG ul {
        padding: 0
    }

    .menuview-2hUkG img {
        max-width: 100%
    }

    .menuview-2hUkG ul {
        list-style: none
    }

    .menuview-17K3g {
        height: 100%;
        padding-bottom: 1.28rem;
        background-color: #fff
    }

    .menuview-17K3g.menuview-1bQp_, .menuview-17K3g.menuview-2UEJ0 {
        padding-bottom: 0
    }

    .menuview-2iJo3 {
        padding: .666667rem 0;
        text-align: center;
        font-size: .426667rem;
        color: #333;
        background-color: #eee
    }

    .menuview-2iJo3 p {
        padding: 0;
        margin: 0;
        line-height: .853333rem
    }

    .menuview-2iJo3 img {
        width: 40%
    }

    .menuview-i6fQ3 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 100%
    }

    .menuview-2_lFf {
        width: 2.266667rem;
        height: 100%
    }

    .menuview-JqDMu {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: block;
        width: 0;
        height: 100%
    }

    .menuview-2bWpI {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 3;
        line-height: 1.333333rem;
        font-size: .48rem;
        background-color: rgba(0, 0, 0, .7);
        color: #ccc;
        text-align: center
    }

    .cartbutton-2tycR {
        display: inline-block;
        font-size: .346667rem;
        white-space: nowrap
    }

    .cartbutton-2tycR a {
        display: inline-block;
        padding: .093333rem;
        vertical-align: middle;
        text-decoration: none
    }

    .cartbutton-2tycR svg {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        fill: #3190e8
    }

    [data-dpr="2"] .cartbutton-2tycR svg {
        width: 40px;
        height: 40px
    }

    [data-dpr="3"] .cartbutton-2tycR svg {
        width: 60px;
        height: 60px
    }

    .cartbutton-2tycR a[disabled] svg {
        fill: #ddd
    }

    .cartbutton-2tycR .cartbutton-1GYwQ[disabled] .cartbutton-3IXVK {
        background-color: #ddd
    }

    .cartbutton-2tycR.cartbutton-1p12n {
        color: #999
    }

    .cartbutton-2OSi7 {
        text-align: center;
        color: #666;
        font-size: .373333rem;
        min-width: .4rem;
        max-width: 2em;
        overflow: hidden
    }

    .cartbutton-2OSi7, .cartbutton-3IXVK {
        display: inline-block;
        vertical-align: middle
    }

    .cartbutton-3IXVK {
        color: #fff;
        background-color: #3199e8;
        text-decoration: none;
        padding: 0 .2rem;
        font-size: .32rem;
        border-radius: .346667rem;
        line-height: .666667rem
    }

    .activity-container_2EaDo_0 {
        line-height: .426667rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        font-size: .266667rem
    }

    .activity-containerWrap_12dyC_0 .activity-activityIcon_1iJyG_0 {
        margin-top: .066667rem
    }

    .activity-containerNoWrap_2zBBg_0 .activity-description_2q8qg_0 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
    }

    .activity-containerNoWrap_2zBBg_0 {
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center
    }

    .activity-containerNoWrap_2zBBg_0 .activity-icononly_3QM3P_0 {
        margin-left: .066667rem
    }

    .activity-description_2q8qg_0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: block;
        width: 0
    }

    .activity-activityIcon_1iJyG_0 {
        margin-right: .133333rem;
        font-size: .266667rem;
        font-style: normal;
        line-height: 1;
        height: .293333rem;
        display: inline-block;
        box-sizing: border-box;
        text-align: center;
        border: 1px solid;
        border-radius: .04rem
    }

    .activity-activityIcon_1iJyG_0.activity-icononly_3QM3P_0 {
        margin-right: 0
    }
</style>
<script>
    import {mapActions} from 'vuex';
    import decodeImgUrl from '../../utils/decodeImgUrl.js';
    export default{
        data(){
            return {
                menu:{}
            };
        },
        methods: Object.assign(mapActions(['getShopMenu']),{
            decodeImgUrl:decodeImgUrl,
            isNew(food){
                return food.attributes&&food.attributes.filter(el => el.icon_name === '新').length;
            }
        }),
        mounted(){
            const query = this.$route.query;
            this.getShopMenu(query.id).then(msg => this.menu = msg);
        }
    }
</script>