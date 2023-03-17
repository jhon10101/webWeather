<?php

                $queryString = http_build_query([
                  'lang' => 'sp',
                  'access_key' => 'a15f4e6273505d91968e009e59b06ccb',
                ]);
                                  
                $ch = curl_init(sprintf('%s?%s', 'http://api.ipapi.com/api/check', $queryString));
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                                  
                $json = curl_exec($ch);
                                  
                curl_close($ch);
                                  
                $apiResult = json_decode($json, true);

                $jsonstring = $apiResult;
                $city = ($jsonstring['city']);
           
          
                   
?>