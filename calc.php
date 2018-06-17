<?php

$dateDeposit = date("Y-m-d", strtotime($_POST['dateCreate']));

$curDate = date("Y-m-d");
 
$diff = abs(strtotime($curDate) - strtotime($dateDeposit));

$months = floor(($diff - $years * 365*60*60*24) / (30*60*60*24));

if ($months >= 1) {
	
	$countDaysImMonth = date("t", strtotime($dateDeposit));
	
	$summadd = $_POST['addToDeposit'] == 'yes' ? (int)$_POST['summadd'] : 0;
	
	$summn = $_POST['summ'] + ($_POST['summ'] + $summadd) * $countDaysImMonth * (0.1 / 365);
	
	echo $summn;
}
else {
	echo $_POST['summ'];
}


/*
summn = summn-1 + (summn-1 + summadd)daysn(percent / daysy)

4.5.2 где summn – сумма на счете на месяц n (руб),

4.5.3 summ n-1 – сумма на счете на конец прошлого месяца

4.5.4 summadd – сумма ежемесячного пополнения

4.5.5 daysn – количество дней в данном месяце, на которые приходился вклад

4.5.6 percent – процентная ставка банка - 10%

4.5.7 daysy – количество дней в году.

4.5.8 Если в поле «Пополнение вклада» стоит «нет», данные «summadd» не используются.
*/
?>