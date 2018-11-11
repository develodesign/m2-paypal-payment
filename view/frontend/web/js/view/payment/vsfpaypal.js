define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'vsfpaypal',
                component: 'Develodesign_VsfPaypal/js/view/payment/method-renderer/vsfpaypal-method'
            }
        );
        return Component.extend({});
    }
);