<!DOCTYPE html>
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>">
<head>
<meta charset="UTF-8" />
<title><?php echo $title; if (isset($_GET['page'])) { echo " - ". ((int) $_GET['page'])." ".$text_page;} ?></title>
<base href="<?php echo $base; ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<?php if ($description) { ?>
<meta name="description" content="<?php echo $description; if (isset($_GET['page'])) { echo " - ". ((int) $_GET['page'])." ".$text_page;} ?>" />
<?php } ?>
<?php if ($keywords) { ?>
<meta name="keywords" content="<?php echo $keywords; ?>" />
<?php } ?>
<meta property="og:title" content="<?php echo $title; if (isset($_GET['page'])) { echo " - ". ((int) $_GET['page'])." ".$text_page;} ?>" />
<meta property="og:type" content="website" />
<meta property="og:url" content="<?php echo $og_url; ?>" />
<?php if ($og_image) { ?>
<meta property="og:image" content="<?php echo $og_image; ?>" />
<?php } else { ?>
<meta property="og:image" content="<?php echo $logo; ?>" />
<?php } ?>
<meta property="og:site_name" content="<?php echo $name; ?>" />
<?php if ($icon) { ?>
<link href="<?php echo $icon; ?>" rel="icon" />
<?php } ?>
<?php foreach ($links as $link) { ?>
<link href="<?php echo $link['href']; ?>" rel="<?php echo $link['rel']; ?>" />
<?php } ?>
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700&subset=cyrillic-ext" rel="stylesheet"> 
<link rel="stylesheet" type="text/css" href="catalog/view/theme/default/stylesheet/stylesheet.css" />
<?php foreach ($styles as $style) { ?>
<link rel="<?php echo $style['rel']; ?>" type="text/css" href="<?php echo $style['href']; ?>" media="<?php echo $style['media']; ?>" />
<?php } ?>
<script type="text/javascript" src="catalog/view/javascript/jquery/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="catalog/view/javascript/jquery/ui/jquery-ui-1.8.16.custom.min.js"></script>
<link rel="stylesheet" type="text/css" href="catalog/view/javascript/jquery/ui/themes/ui-lightness/jquery-ui-1.8.16.custom.css" />
<script type="text/javascript" src="catalog/view/javascript/common.js"></script>
<script type="text/javascript" src="catalog/view/javascript/custom-form-elements.js"></script>
<link href="/jbcallme/css/jquery.jbcallme.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/jbcallme/js/jquery.jbcallme.js"></script>
<link href="/catalog/view/theme/default/stylesheet/jquery.bxslider.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/catalog/view/javascript/jquery/jquery.scrollTo-min.js"></script>
<script type="text/javascript" src="/catalog/view/javascript/jquery/jquery.bxslider.min.js"></script>
<script type="text/javascript" src="catalog/view/javascript/subscribe.js"></script>
<script type="text/javascript" src="/catalog/view/javascript/jquery/fancybox/jquery.fancybox.pack.js"></script>
<link href="/catalog/view/javascript/jquery/fancybox/jquery.fancybox.css" rel="stylesheet" type="text/css">
<script src="http://api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU" type="text/javascript"></script>
<?php foreach ($scripts as $script) { ?>
<script type="text/javascript" src="<?php echo $script; ?>"></script>
<?php } ?>
<!--[if IE 7]> 
<link rel="stylesheet" type="text/css" href="catalog/view/theme/default/stylesheet/ie7.css" />
<![endif]-->
<!--[if lt IE 7]>
<link rel="stylesheet" type="text/css" href="catalog/view/theme/default/stylesheet/ie6.css" />
<script type="text/javascript" src="catalog/view/javascript/DD_belatedPNG_0.0.8a-min.js"></script>
<script type="text/javascript">
DD_belatedPNG.fix('#logo img');
</script>
<![endif]-->
<!--[if IE]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<?php if ($stores) { ?>
<script type="text/javascript"><!--
$(document).ready(function() {
<?php foreach ($stores as $store) { ?>
$('body').prepend('<iframe src="<?php echo $store; ?>" style="display: none;"></iframe>');
<?php } ?>
});
//--></script>
<?php } ?>
<?php echo $google_analytics; ?>
</head>
<body>
<div class="vtop_banner"><a href="/aktsiya-so-skidkoy"><img src="/catalog/view/image/banner_top.gif" alt=""></a></div>
<!--div id="top"><a href="/specials/">Скидки на все!</a></div-->
<div id="top2">
	<div class="container">
		<div id="welcome_right">
			<div class="adress_link">
				<b>Адреса магазинов</b>
				<div class="toggle_div">
					<h4>Красноярск</h4>
					<p>
						<a href="/office1/">ул. Северное шоссе, д. 35Г</a>
						<a href="/office2/">пер. Телевизорный, 3</a>
						<a href="/aviatorov/">ул. Авиаторов, 7/1</a>
						<a href="/office3/">ул. Вавилова, 1, стр. 64</a>
						<a href="/office4/">ул. Айвазовского, 57Г</a>
					</p>
					<h4>Сосновоборск</h4>
					<p class="p_s">
						<a href="/office5/">ул. Заводская 1 (магазин Светофор)</a>
					</p>
				</div>
			</div>
			<div class="time_link">
				<b>Режим работы</b>
				<div class="toggle_div">
					<table>
						<tr>
							<td><i>пн. — сб.</i></td>
							<td>9:00 — 18:00</td>
						</tr>
						<tr>
							<td><i>вс.</i></td>
							<td><i>выходной</i></td>
						</tr>
					</table>
				</div>
			</div>
			<div class="mail_link">
				<a href="/adresa-magazinov">Контакты</a>
			</div>
		</div>
		<div id="welcome">
			<?php if (!$logged) { ?>
			<?php echo $text_welcome; ?>
			<?php } else { ?>
			<span class="welcome_text_logged"><?php echo $text_logged; ?></span>
			<?php } ?>
		</div>
		<div class="clear"></div>
	</div>
</div>
<div class="clear"></div>
<div class="container">
<header>

  <?php if ($logo) { ?>
  <div id="logo">
  <?php if ($home == $og_url) { ?>
  <img src="<?php echo $logo; ?>" title="<?php echo $name; ?>" alt="<?php echo $name; ?>" />
  <?php } else { ?>
  <a href="<?php echo $home; ?>"><img src="<?php echo $logo; ?>" title="<?php echo $name; ?>" alt="<?php echo $name; ?>" /></a>
  <?php } ?>
  </div>
   <div id="search">
    <div class="button-search"></div>
    <input type="text" name="search" placeholder="<?php echo $text_search; ?>" value="<?php echo $search; ?>" />
  </div>
  <div class="top_phone">
	<div class="top_phone_block"><?php echo htmlspecialchars_decode($telephone); ?></div>
	<div class="callback callme_button" onclick="yaCounter41405084.reachGoal ('zvonok'); return true;">Заказать обратный звонок</div>
  </div>
  <?php } ?>
  <?php echo $language; ?>
  <?php echo $currency; ?>
  
  <div class="links">
	  <ul>
		<li><a href="/poluchenie/">Получение</a></li>
		<li><a href="/oplata/">Оплата</a></li>
		<li><a href="/garantiya-i-vozvrat/">Гарантия и возврат</a></li>
	  </ul>
  </div>
  <?php if (!$logged) { ?>
   <a href="<?php echo $wishlist; ?>" class="wishlist-total"></a>
  <?php } else { ?>
  <a href="<?php echo $wishlist; ?>" id="wishlist-total" class="wishlist-total"><?php echo $text_wishlist; ?></a>
  <?php } ?>
  
</header>
</div>
<nav>
	<div class="container">
	<?php if ($categories) { ?>
	<div id="menu">
		<div class="cart_menu_wrap">
			<?php echo $cart; ?>
		</div>
		<?php foreach ($modules as $module) { ?>
		<?php echo $module; ?>
		<?php } ?>
		<span class="adaptive_menu"></span>
		<ul class="top_category_ul">
			<?php foreach ($categories as $category) { ?>
			<li><?php if ($category['active']) { ?>
			<a href="<?php echo $category['href']; ?>" class="active"><?php echo $category['name']; ?></a>
			<?php } else { ?>
			<a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a>
			<?php } ?>
			  <?php if ($category['children']) { ?>
				<?php for ($i = 0; $i < count($category['children']);) { ?>
				<ul>
				  <?php $j = $i + ceil(count($category['children']) / $category['column']); ?>
				  <?php for (; $i < $j; $i++) { ?>
				  <?php if (isset($category['children'][$i])) { ?>
				  <li><a href="<?php echo $category['children'][$i]['href']; ?>"><?php echo $category['children'][$i]['name']; ?></a></li>
				  <?php } ?>
				  <?php } ?>
				</ul>
				<?php } ?>
			  <?php } ?>
			</li>
			<?php } ?>
		</ul>
		<ul class="top_category_ul2">
			<li><a href="/teplicy-i-parniky/">Теплицы и парники</a>
				<div class="menu_big">
					<div class="menu_big_wrap_container">
						<div class="menu_big_wrap">
							<div class="menu_big_column">
								<div class="menu_big_column_title_img"><a href="/teplicy-i-parniky/teplicy/"><img src="/catalog/view/theme/default/image/new_menu/vse_teplicy.jpg" alt=""></a></div>
								<div class="menu_big_column_title"><a href="/teplicy-i-parniky/teplicy/">Все теплицы</a></div>
								<ul>
									<li><a href="/teplitsa-yasna-2ts">Ясна 2Ц</a></li>
									<li><a href="/teplitsa-yasna-25mts">Ясна 2,5МЦ</a></li>
									<li><a href="/teplitsa-yasna-lajt-3ts">Ясна Лайт 3Ц</a></li>
									<li><a href="/teplitsa-yasna-optima-3ts">Ясна Оптима 3Ц</a></li>
									<li><a href="/teplitsa-yasna-3mts">Ясна 3 МЦ</a></li>
									<li><a href="/teplitsa-udachnaya-3mts">Ясна Удачная 3МЦ</a></li>
									<li><a href="/teplitsa-arka-3mts">Ясна Арка 3Ц</a></li>
									<li><a href="/teplitsa-yasna-lyuks-3mts">Ясна Люкс 3МЦ</a></li>
									<li><a href="/teplitsa-yasna-lyuks-4m">Ясна Люкс 4М</a></li>
								</ul>
							</div>
							<div class="menu_big_column">
								<div class="menu_big_column_title_img"><img src="/catalog/view/theme/default/image/new_menu/teplicy_po_shirine.jpg" alt=""></div>
								<div class="menu_big_column_title">Теплицы по ширине</div>
								<ul>
									<li><a href="/teplicy-i-parniky/teplicy/#category_id=26&page=1&path=20_26&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[13][]=2+м">Ширина 2 м</a></li>
									<li><a href="/teplicy-i-parniky/teplicy/#category_id=26&page=1&path=20_26&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[13][]=2,5+м">Ширина 2,5 м</a></li>
									<li><a href="/teplicy-i-parniky/teplicy/#category_id=26&page=1&path=20_26&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[13][]=3+м">Ширина 3 м</a></li>
									<li><a href="/teplicy-i-parniky/teplicy/#category_id=26&page=1&path=20_26&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[13][]=4+м">Ширина 4 м</a></li>
								</ul>
							</div>
							<div class="menu_big_column">
								<div class="menu_big_column_title_img"><img src="/catalog/view/theme/default/image/new_menu/teplicy_na_zakaz.jpg" alt=""></div>
								<div class="menu_big_column_title">Теплицы на заказ</div>
								<ul>
									<li><a href="#">Заказать теплицу по индивидуальному проекту</a></li>
								</ul>
							</div>
							<div class="menu_big_column">
								<div class="menu_big_column_title_img"><a href="/teplicy-i-parniky/parniky/"><img src="/catalog/view/theme/default/image/new_menu/parnikil.jpg" alt=""></a></div>
								<div class="menu_big_column_title"><a href="/teplicy-i-parniky/parniky/">Парники</a></div>
								<ul>
									<li><a href="/teplitsa-parnik-babochka">Металлические</a></li>
									<li><a href="/parnik-sadovod">Пластиковые</a></li>
								</ul>
							</div>
							<div class="menu_big_column">
								<div class="menu_big_column_title_img"><img src="/catalog/view/theme/default/image/new_menu/dop_opcii.jpg" alt=""></div>
								<div class="menu_big_column_title">Дополнительные опции</div>
								<ul>
									<li><a href="/teplicy-i-parniky/fortochki/">Дополнительные форточки</a></li>
									<li><a href="/teplicy-i-parniky/avtoprovetrivateli/">Автопроветриватели</a></li>
									<li><a href="/teplicy-i-parniky/sistemy-poliva/">Капельные поливы</a></li>
									<li><a href="/teplicy-i-parniky/podporki-ysileniya/">Системы усиления</a></li>
									<li><a href="/teplicy-i-parniky/podvesy/">Системы подвеса растений</a></li>
								</ul>
							</div>
							<div class="menu_big_column">
								<div class="menu_big_column_title_img"><a href="/teplicy-i-parniky/osnovaniya-dlya-teplits/"><img src="/catalog/view/theme/default/image/new_menu/osnovaniya_dlya_teplic.jpg" alt=""></a></div>
								<div class="menu_big_column_title"><a href="/teplicy-i-parniky/osnovaniya-dlya-teplits/">Основания для теплиц</a></div>
								<ul>
									<li><a href="/brus-listvennitsa">Брус из лиственницы</a></li>
									<li><a href="/koljya">Колья</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>			
			</li>
			<li><a href="/polikarbonat/">Поликарбонат</a>
		  		<div class="menu_big">
		  			<div class="menu_big_wrap_container">
			  			<div class="menu_big_wrap">
			  				<div class="menu_big_column">
				  				<div class="menu_big_column_title_img"><a href="/polikarbonat/prozrachnyj/"><img src="/catalog/view/theme/default/image/new_menu/prozrachnyi_spk.jpg" alt=""></a></div>
								<div class="menu_big_column_title"><a href="/polikarbonat/prozrachnyj/">Прозрачный СПК</a></div>
								<ul>
									<li><a href="/polikarbonat/prozrachnyj/#category_id=46&page=1&path=18_46&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[12][]=3,5+мм&attribute_value[12][]=4+мм&attribute_value[12][]=5+мм">3,5 мм — 5 мм</a></li>
									<li><a href="/polikarbonat/prozrachnyj/#category_id=46&page=1&path=18_46&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[12][]=6+мм">6 мм</a></li>
									<li><a href="/polikarbonat/prozrachnyj/#category_id=46&page=1&path=18_46&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[12][]=8+мм">8 мм</a></li>
									<li><a href="/polikarbonat/prozrachnyj/#category_id=46&page=1&path=18_46&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[12][]=10+мм">10 мм</a></li>
								</ul>
				  			</div>
				  			<div class="menu_big_column">
				  				<div class="menu_big_column_title_img"><a href="/polikarbonat/cvetnoj/"><img src="/catalog/view/theme/default/image/new_menu/cvetnoi_spk.jpg" alt=""></a></div>
								<div class="menu_big_column_title"><a href="/polikarbonat/cvetnoj/">Цветной СПК</a></div>
								<ul>
									<li><a href="/polikarbonat/cvetnoj/#category_id=45&page=1&path=18_45&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[42][]=4+мм">4 мм</a></li>
									<li><a href="/polikarbonat/cvetnoj/#category_id=45&page=1&path=18_45&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[42][]=6+мм">6 мм</a></li>
									<li><a href="/polikarbonat/cvetnoj/#category_id=45&page=1&path=18_45&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[42][]=8+мм">8 мм</a></li>
									<li><a href="/polikarbonat/cvetnoj/#category_id=45&page=1&path=18_45&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[42][]=10+мм">10 мм</a></li>
								</ul>
				  			</div>
				  			<div class="menu_big_column">
				  				<div class="menu_big_column_title_img"><a href="/polikarbonat/vse-dlya-montazha/"><img src="/catalog/view/theme/default/image/new_menu/vse_dlya_montazha.jpg" alt=""></a></div>
								<div class="menu_big_column_title"><a href="/polikarbonat/vse-dlya-montazha/">Все для монтажа</a></div>
								<ul>
									<li><a href="/polikarbonat/komplekty/profili-i-shajby/#category_id=70&page=1&path=18_60_70&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[45][]=торцевой+профиль">Торцевой профиль</a></li>
									<li><a href="/polikarbonat/komplekty/profili-i-shajby/#category_id=70&page=1&path=18_60_70&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[45][]=соединительный+профиль">Соединительный профиль</a></li>
									<li><a href="/polikarbonat/komplekty/profili-i-shajby/#category_id=70&page=1&path=18_60_70&sort=p.sort_order&order=ASC&limit=12&route=product/category&min_price=10&max_price=950&attribute_value[45][]=коньковый+профиль">Коньковый профиль</a></li>
									<li><a href="/polikarbonat/komplekty/profili-i-shajby/#category_id=70&page=1&path=18_60_70&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[45][]=угловой+профиль">Угловой профиль</a></li>
									<li><a href="/polikarbonat/komplekty/profili-i-shajby/#category_id=70&page=1&path=18_60_70&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[45][]=пристенный+профиль">Пристенный профиль</a></li>
								</ul>
								<ul>
									<li><a href="/polikarbonat/komplekty/profili-i-shajby/#category_id=70&page=1&path=18_60_70&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[44][]=4+мм">Профили для СПК  4 мм</a></li>
									<li><a href="/polikarbonat/komplekty/profili-i-shajby/#category_id=70&page=1&path=18_60_70&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[44][]=6+мм">Профили для СПК  6 мм</a></li>
									<li><a href="/polikarbonat/komplekty/profili-i-shajby/#category_id=70&page=1&path=18_60_70&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[44][]=8+мм">Профили для СПК  8 мм</a></li>
									<li><a href="/polikarbonat/komplekty/profili-i-shajby/#category_id=70&page=1&path=18_60_70&sort=p.sort_order&order=ASC&limit=12&route=product/category&attribute_value[44][]=10+мм">Профили для СПК  10 мм</a></li>
								</ul>
								<ul>
									<li><a href="/polikarbonat/komplekty/profili-i-shajby/">Термошайбы</a></li>
									<li><a href="/polikarbonat/vse-dlya-montazha/samorezy/">Саморезы</a></li>
								</ul>
				  			</div>
				  			<div class="menu_big_column">
				  				<div class="menu_big_column_title_img"><a href="/polikarbonat/komplekty/zaschitnye-lenty/"><img src="/catalog/view/theme/default/image/new_menu/zashitnye_lenty.jpg" alt=""></a></div>
								<div class="menu_big_column_title"><a href="/polikarbonat/komplekty/zaschitnye-lenty/">Защитные ленты</a></div>
								<ul>
									<li><a href="/polikarbonat/komplekty/zaschitnye-lenty/">Герметизирующая лента</a></li>
									<li><a href="/polikarbonat/komplekty/zaschitnye-lenty/">Перфорированная лента</a></li>
									<li><a href="/polikarbonat/komplekty/zaschitnye-lenty/">Торцевой резиновый уплотнитель</a></li>
								</ul>
								<ul>
									<li><a href="/polikarbonat/komplekty/zaschitnye-lenty/">Ленты для СПК 4-6 мм</a></li>
									<li><a href="/polikarbonat/komplekty/zaschitnye-lenty/">Ленты для СПК 8-10 мм</a></li>
								</ul>
				  			</div>
			  			</div>
			  		</div>
		  		</div>			
			</li>
			<li><a href="/sadovyj-inventar/">Садовый инвентарь</a>
		  		<div class="menu_big">
		  			<div class="menu_big_wrap_container">
		  				<div class="menu_big_wrap">
		  					<div class="menu_big_column">
				  				<div class="menu_big_column_title_img"><a href="/sadovyj-inventar/dachnye-dushi/"><img src="/catalog/view/theme/default/image/new_menu/dachnye_dushi.jpg" alt=""></a></div>
								<div class="menu_big_column_title"><a href="/sadovyj-inventar/dachnye-dushi/">Дачные души</a></div>
				  			</div>
				  			<div class="menu_big_column">
				  				<div class="menu_big_column_title_img"><a href="/sadovyj-inventar/gryadki/"><img src="/catalog/view/theme/default/image/new_menu/gryadki.jpg" alt=""></a></div>
								<div class="menu_big_column_title"><a href="/sadovyj-inventar/gryadki/">Грядки</a></div>
				  			</div>
				  			<div class="menu_big_column">
				  				<div class="menu_big_column_title_img"><a href="/sadovyj-inventar/shezlongi/"><img src="/catalog/view/theme/default/image/new_menu/shezlongi.jpg" alt=""></a></div>
								<div class="menu_big_column_title"><a href="/sadovyj-inventar/shezlongi/">Шезлонги</a></div>
				  			</div>
		  				</div>
		  			</div>
		  		</div>	
			</li>
		</ul>
	</div>
	<?php } ?>
	</div>
</nav>
<div class="container">
<div id="notification"></div>
