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
                type: 'paypal',
                component: 'Develodesign_PaypalPayment/js/view/payment/method-renderer/paypal-method'
            }
        );
        return Component.extend({});
    }
);