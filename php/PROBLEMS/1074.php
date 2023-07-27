<?php
    $e = intval(fgets(STDIN));
    
    for($i=0;$i<$e;$i++){
        $x = intval(fgets(STDIN));
        $str = '';
        if ($x == 0)
        {
            printf("NULL\n");
        }
        else
        {
            if ($x % 2 == 0)
            {
                $str.="EVEN";
            }
            else
            {
                $str.="ODD";
            }

            if ($x > 0)
            {
                $str.=" POSITIVE";
            }
            else
            {
                $str.=" NEGATIVE";
            }
            printf("%s\n", $str);
        }
    }
?>