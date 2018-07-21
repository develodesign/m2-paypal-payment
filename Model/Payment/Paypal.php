<?php


namespace Develodesign\PaypalPayment\Model\Payment;

class Paypal extends \Magento\Payment\Model\Method\AbstractMethod
{

    protected $_code = "paypal";
    protected $_isOffline = true;

    public function isAvailable(
        \Magento\Quote\Api\Data\CartInterface $quote = null
    ) {
        return parent::isAvailable($quote);
    }
}
