# The PayPal payment module for magento2

This API extension create custom PayPal paymnet method with code `vsfpaypal` your Magento 2 instance. It use `develodesign/m2-paypal-payment` composer module so you have to install it in your Magento `2.2.x` instance.

## Installation

```
composer config repositories.develodesign vcs https://github.com/develodesign/m2-paypal-payment.git
composer require develodesign/m2-paypal-payment:dev-master
bin/magento module:enable --all
```
