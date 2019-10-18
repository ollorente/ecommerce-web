<template>
	<nav class="menu" id="menu">
		<div class="container container-buttons-menu">
			<button id="btn-menu-barras" class="btn-menu-barras"><i class="fas fa-bars"></i></button>
			<button id="btn-menu-cerrar" class="btn-menu-cerrar"><i class="fas fa-times"></i></button>
		</div>

		<div class="container container-enlaces-nav">
			<div class="btn-departamentos" id="btn-departamentos">
				<p>Todos los <span>Departamentos</span></p>
				<i class="fas fa-caret-down"></i>
			</div>

			<div class="enlaces">
				<a href="#">Cuenta</a>
				<a href="#">Promociones</a>
				<a href="#">Mesa de Regalos</a>
				<a href="#">Ayuda</a>
			</div>
		</div>

		<div class="container container-grid">
			<div class="grid" id="grid">
				<div class="categorias">
					<button class="btn-regresar"><i class="fas fa-arrow-left"></i> Regresar</button>
					<h3 class="subtitulo">Categorías</h3>

					<a href="#" data-categoria="tecnologia-y-computadoras">Tecnología y Computadoras
						<i class="fas fa-angle-right"></i></a>
					<a href="#" data-categoria="libros">Libros <i class="fas fa-angle-right"></i></a>
					<a href="#" data-categoria="ropa-y-accesorios">Ropa y Accesorios
						<i class="fas fa-angle-right"></i></a>
					<a href="#" data-categoria="hogar-y-cocina">Hogar y Cocina <i class="fas fa-angle-right"></i></a>
					<a href="#" data-categoria="juegos-y-juguetes">Juegos y Juguetes
						<i class="fas fa-angle-right"></i></a>
					<a href="#" data-categoria="salud-y-belleza">Salud y Belleza <i class="fas fa-angle-right"></i></a>
					<a href="#" data-categoria="alimentos-y-bebidas">Alimentos y Bebidas
						<i class="fas fa-angle-right"></i></a>
				</div>

				<div class="container-subcategorias">
					<div class="subcategoria activo" data-categoria="tecnologia-y-computadoras">
						<div class="enlaces-subcategoria">
							<button class="btn-regresar"><i class="fas fa-arrow-left"></i> Regresar</button>
							<h3 class="subtitulo">Tecnología y Computadoras</h3>
							<a href="#">Laptops</a>
							<a href="#">Tablets</a>
							<a href="#">Computadoras de Escritorio</a>
							<a href="#">Monitores</a>
							<a href="#">Componentes</a>
						</div>
						<div class="banner-subcategoria">
							<a href="#">
								<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562472720/default.jpg" alt="Image">
                            </a>
						</div>
						<div class="galeria-subcategoria">
							<a href="#">
								<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1567311520/skyscraper/trinidad-and-tobago.jpg" alt="Imagen">
                            </a>
								<a href="#">
									<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562727545/skyscraper/venezuela.jpg" alt="Imagen">
                            </a>
									<a href="#">
										<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562727545/skyscraper/venezuela.jpg" alt="Imagen">
                            </a>
										<a href="#">
											<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562726779/skyscraper/paraguay.jpg" alt="Imagen">
                            </a>
						</div>
					</div>

					<div class="subcategoria" data-categoria="libros">
						<div class="enlaces-subcategoria">
							<button class="btn-regresar"><i class="fas fa-arrow-left"></i> Regresar</button>
							<h3 class="subtitulo">Libros</h3>
							<a href="#">Laptops</a>
							<a href="#">Tablets</a>
							<a href="#">Computadoras de Escritorio</a>
							<a href="#">Monitores</a>
							<a href="#">Componentes</a>
						</div>
						<div class="banner-subcategoria">
							<a href="#">
								<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562287046/ollorente/r1q732k9qz9f7rkbkyq7.jpg" alt="Image">
                            </a>
						</div>
						<div class="galeria-subcategoria">
							<a href="#">
								<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562458136/ollorente/posts/miblsocuavql5cuazugb.jpg" alt="Imagen">
                            </a>
								<a href="#">
									<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562373998/ollorente/posts/a7ogoj6kuxmt5tqrgrf1.png" alt="Imagen">
                            </a>
									<a href="#">
										<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562373925/ollorente/posts/b6qdja71zwqompn8x6zc.png" alt="Imagen">
                            </a>
										<a href="#">
											<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1560395098/ollorente/posts/lqxycxqwflmhtxpu5owx.jpg" alt="Imagen">
                            </a>
						</div>
					</div>

					<div class="subcategoria" data-categoria="ropa-y-accesorios">
						<div class="enlaces-subcategoria">
							<button class="btn-regresar"><i class="fas fa-arrow-left"></i> Regresar</button>
							<h3 class="subtitulo">Ropa y Accesorios</h3>
							<a href="#">Laptops</a>
							<a href="#">Tablets</a>
							<a href="#">Computadoras de Escritorio</a>
							<a href="#">Monitores</a>
							<a href="#">Componentes</a>
						</div>
						<div class="banner-subcategoria">
							<a href="#">
								<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1567311241/admin/yhk6sh9vxvvgytxjymkg.jpg" alt="Image">
                            </a>
						</div>
						<div class="galeria-subcategoria">
							<a href="#">
								<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562563401/admin/h4yngfhaoysb253krd6l.png" alt="Imagen">
                            </a>
								<a href="#">
									<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562279383/admin/movhmbszggr4460xwh7f.webp" alt="Imagen">
                            </a>
									<a href="#">
										<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562278791/admin/q3wqao4qd9hmju1re8rc.png" alt="Imagen">
                            </a>
										<a href="#">
											<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562277814/admin/tzdlwg9svk5rqz2h4h1o.jpg" alt="Imagen">
                            </a>
						</div>
					</div>

					<div class="subcategoria" data-categoria="hogar-y-cocina">
						<div class="enlaces-subcategoria">
							<button class="btn-regresar"><i class="fas fa-arrow-left"></i> Regresar</button>
							<h3 class="subtitulo">Hogar y Cocina</h3>
							<a href="#">Laptops</a>
							<a href="#">Tablets</a>
							<a href="#">Computadoras de Escritorio</a>
							<a href="#">Monitores</a>
							<a href="#">Componentes</a>
						</div>
						<div class="banner-subcategoria">
							<a href="#">
								<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562123737/admin/ztr9jq0ezulldvn8vk8m.jpg" alt="Image">
                            </a>
						</div>
						<div class="galeria-subcategoria">
							<a href="#">
								<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562126299/admin/duc4mebtps10lodxbjzs.png" alt="Imagen">
                            </a>
								<a href="#">
									<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562124982/admin/tk6gldesr8dc0ulsjqvr.jpg" alt="Imagen">
                            </a>
									<a href="#">
										<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562124397/admin/v1utuxhtxjuc09uypjjy.png" alt="Imagen">
                            </a>
										<a href="#">
											<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562473431/admin/acekrshm7hwzocqifrfu.png" alt="Imagen">
                            </a>
						</div>
					</div>

					<div class="subcategoria" data-categoria="juegos-y-juguetes">
						<div class="enlaces-subcategoria">
							<button class="btn-regresar"><i class="fas fa-arrow-left"></i> Regresar</button>
							<h3 class="subtitulo">Juegos y Juguetes</h3>
							<a href="#">Laptops</a>
							<a href="#">Tablets</a>
							<a href="#">Computadoras de Escritorio</a>
							<a href="#">Monitores</a>
							<a href="#">Componentes</a>
							<a href="#">Laptops</a>
							<a href="#">Tablets</a>
							<a href="#">Computadoras de Escritorio</a>
							<a href="#">Monitores</a>
							<a href="#">Componentes</a>
						</div>
						<div class="banner-subcategoria">
							<a href="#">
								<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562123158/admin/nup2tjfkhfk0iw7kppuk.jpg" alt="Image">
                            </a>
						</div>
						<div class="galeria-subcategoria">
							<a href="#">
								<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562122521/admin/s3zmoibjzdko4khej4zo.jpg" alt="Imagen">
                            </a>
								<a href="#">
									<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562122521/admin/s3zmoibjzdko4khej4zo.jpg" alt="Imagen">
                            </a>
									<a href="#">
										<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562120782/admin/j6uf5cm94o6yw60wa9ej.jpg" alt="Imagen">
                            </a>
										<a href="#">
											<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562120090/admin/caqvurdvhpx9lkj4hing.jpg" alt="Imagen">
                            </a>
						</div>
					</div>

					<div class="subcategoria" data-categoria="salud-y-belleza">
						<div class="enlaces-subcategoria">
							<button class="btn-regresar"><i class="fas fa-arrow-left"></i> Regresar</button>
							<h3 class="subtitulo">Salud y Belleza</h3>
							<a href="#">Laptops</a>
							<a href="#">Tablets</a>
							<a href="#">Computadoras de Escritorio</a>
							<a href="#">Monitores</a>
							<a href="#">Componentes</a>
						</div>
						<div class="banner-subcategoria">
							<a href="#">
								<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1560390956/americangolf/puo0izfcj4bagfejtas9.jpg" alt="Image">
                            </a>
						</div>
						<div class="galeria-subcategoria">
							<a href="#">
								<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562282235/capilla-doctrinera-de-nuestra-senora-del-campo/drkby18ei7qby3xfmru2.png" alt="Imagen">
                            </a>
								<a href="#">
									<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562282982/centro-comercial-cedritos/axfgdaabsfs1r1wy39et.png" alt="Imagen">
                            </a>
									<a href="#">
										<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562283757/centro-comercial-mazuren/xixplbzxoz8jao3w6bmf.png" alt="Imagen">
                            </a>
										<a href="#">
											<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562285930/centro-comercial-oulet-bima/tljmkjhkpxcgjr9olmuu.png" alt="Imagen">
                            </a>
						</div>
					</div>

					<div class="subcategoria" data-categoria="alimentos-y-bebidas">
						<div class="enlaces-subcategoria">
							<button class="btn-regresar"><i class="fas fa-arrow-left"></i> Regresar</button>
							<h3 class="subtitulo">Alimentos y Bebidas</h3>
							<a href="#">Laptops</a>
							<a href="#">Tablets</a>
							<a href="#">Computadoras de Escritorio</a>
							<a href="#">Monitores</a>
							<a href="#">Componentes</a>
						</div>
						<div class="banner-subcategoria">
							<a href="#">
								<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562560391/centro-comercial-santafe/u3ilfbptjhlmbsszclum.png" alt="Image">
                            </a>
						</div>
						<div class="galeria-subcategoria">
							<a href="#">
								<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562655216/fanargentina/iisklkgyt4jjvfipfuxz.jpg" alt="Imagen">
                            </a>
								<a href="#">
									<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562808355/fanbolivia/nbzfmofnme6odwudpqje.jpg" alt="Imagen">
                            </a>
									<a href="#">
										<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562808921/fanbrasil/u8smfxuqkabqhb4flcms.jpg" alt="Imagen">
                            </a>
										<a href="#">
											<img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562655371/fancolombia/mlhb0ovr365heszslzcv.jpg" alt="Imagen">
                            </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script></script>

<style scoped></style>
