<?php
/**
 * 签名类
 * Class Signature
 */

class Signature {

    // 待签名参数
    public $config;

    // 注册签名参数
    public function __construct($config)
    {
        if ($config['key'] == null) {
            exit('授权key不能为空');
        }

        if ($config['redirect_uri'] == null) {
            exit('授权回调地址不能为空');
        }

        $this->config = $config;
    }

    /**
     * 生成签名
     * @return string
     */
    public function getSign()
    {
        foreach ($this->config as $k => $value) {
            $param[$k] = $value;
        }

        // 按照ASCII码从小到大排序
        ksort($param);
        $str = $this->formatQueryParam($param, false);

        // 拼接 KEY
        $str = $str."&key=" . $this->config['key'];

        // MD5加密
        $str = md5($str);

        // 字符转为大写
        $sign_str = strtoupper($str);

        return $sign_str;
    }

    /**
     * 格式化参数
     * @param $paraMap
     * @param $urlencode
     * @return string
     */
    public function formatQueryParam ($paraMap, $urlencode)
    {
        $buff = "";
        ksort($paraMap);
        foreach ($paraMap as $k => $v)
        {
            if($urlencode)
            {
                $v = urlencode($v);
            }
            $buff .= $k . "=" . $v . "&";
        }
        $reqPar = '';
        if (strlen($buff) > 0)
        {
            $reqPar = substr($buff, 0, strlen($buff)-1);
        }
        return $reqPar;
    }
}