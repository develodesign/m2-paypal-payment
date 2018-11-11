<?php


namespace Develodesign\VsfPaypal\Model\Payment;

class VsfPaypal extends \Magento\Payment\Model\Method\AbstractMethod
{

    protected $_code = "vsfpaypal";
    protected $_isOffline = true;

    public function isAvailable(
        \Magento\Quote\Api\Data\CartInterface $quote = null
    ) {
        return parent::isAvailable($quote);
    }
}
