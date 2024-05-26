// Obtener los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const receta = urlParams.get('receta');

// Datos de ejemplo para las recetas
const recetas = {
    // POSTRES
    brownies: {
        titulo: "Brownies de chocolate",
        ingredientes: [
            "200g de chocolate negro",
            "150g de mantequilla",
            "200g de azúcar",
            "3 huevos",
            "100g de harina",
            "50g de nueces (opcional)"
        ],
        pasos: [
            "Precalienta el horno a 180°C (350°F).",
            "Derrite el chocolate negro y la mantequilla juntos en un tazón resistente al calor, ya sea en el microondas o al baño maría. Mezcla hasta que esté suave.",
            "Añade el azúcar y mezcla bien.",
            "Incorpora los huevos, uno a uno, mezclando bien después de cada adición.",
            "Añade la harina y mezcla hasta que esté completamente integrada.",
            "Si deseas, añade las nueces y mezcla.",
            "Vierte la mezcla en un molde cuadrado previamente engrasado y enharinado.",
            "Hornea durante 25-30 minutos, o hasta que al insertar un palillo en el centro, éste salga limpio.",
            "Deja enfriar en el molde antes de cortar en cuadrados."
        ],
        video: "https://www.youtube.com/embed/xlB8o0HsYcQ?si=cT20ZlNlfbzXB0aS"
    },
    tarta_manzana: {
        titulo: "Tarta de manzana",
        ingredientes: [
            "5 manzanas",
            "200g de azúcar",
            "200g de harina",
            "100g de mantequilla",
            "2 huevos",
            "1 cucharadita de canela"
        ],
        pasos: [
            "Precalienta el horno a 180°C (350°F).",
            "Pela y corta las manzanas en láminas finas.",
            "En un bol, bate los huevos con el azúcar hasta que la mezcla esté espumosa.",
            "Añade la mantequilla derretida y mezcla bien.",
            "Incorpora la harina y la canela, y mezcla hasta obtener una masa homogénea.",
            "Vierte la mitad de la masa en un molde engrasado y enharinado.",
            "Coloca las láminas de manzana sobre la masa, formando una capa uniforme.",
            "Vierte el resto de la masa sobre las manzanas.",
            "Hornea durante 40-45 minutos, o hasta que la tarta esté dorada y al insertar un palillo, éste salga limpio.",
            "Deja enfriar antes de desmoldar y servir."
        ],
        video: "https://www.youtube.com/embed/btfvUNYFNC0?si=Oh6PMlmfHNIDV64J"
    },
    Cheesecake_fresa: {
        titulo: "Cheesecake de fresa",
        ingredientes: [
            "200g de galletas tipo digestive",
            "100g de mantequilla",
            "500g de queso crema",
            "200g de azúcar",
            "200ml de nata para montar",
            "250g de fresas"
        ],
        pasos: [
            "Tritura las galletas hasta obtener migas finas. Mézclalas con la mantequilla derretida.",
            "Presiona la mezcla de galletas en el fondo de un molde desmontable para formar la base.",
            "En un bol grande, bate el queso crema con el azúcar hasta que esté suave.",
            "Añade la nata para montar y sigue batiendo hasta que esté bien incorporada.",
            "Vierte la mezcla de queso sobre la base de galletas y alisa la superficie.",
            "Refrigera el cheesecake durante al menos 4 horas, o hasta que esté firme.",
            "Corta las fresas en láminas y colócalas sobre el cheesecake antes de servir."
        ],
        video: "https://www.youtube.com/embed/eB5Ip1r7P9w?si=E6yh7Bz8Pf8pKOjG"
    },
    Crepes_nutella: {
        titulo: "Crepes con nutella",
        ingredientes: [
            "250g de harina",
            "500ml de leche",
            "3 huevos",
            "50g de mantequilla",
            "Nutella (al gusto)",
            "Frutas (opcional, para acompañar)"
        ],
        pasos: [
            "En un bol, mezcla la harina, los huevos, la leche y la mantequilla derretida hasta obtener una masa suave y sin grumos.",
            "Calienta una sartén antiadherente a fuego medio y engrásala ligeramente.",
            "Vierte un poco de masa en la sartén, inclinándola para que la masa cubra toda la superficie de manera uniforme.",
            "Cocina el crepe hasta que los bordes se despeguen y la parte inferior esté dorada, luego dale la vuelta y cocina el otro lado.",
            "Repite el proceso con el resto de la masa.",
            "Unta cada crepe con Nutella y, si deseas, añade frutas frescas antes de enrollar o doblar los crepes."
        ],
        video: "https://www.youtube.com/embed/foZJ7DLOeHE?si=KHy9ranOtIc-Mj8Y"
    },
    Helado_vainilla: {
        titulo: "Helado de vainilla",
        ingredientes: [
            "500ml de leche",
            "200ml de nata para montar",
            "150g de azúcar",
            "1 vaina de vainilla (o esencia de vainilla)",
            "4 yemas de huevo"
        ],
        pasos: [
            "En una cacerola, calienta la leche junto con la vaina de vainilla (o esencia de vainilla) hasta que esté caliente pero no hirviendo.",
            "En un bol, bate las yemas de huevo con el azúcar hasta que estén pálidas y espesas.",
            "Gradualmente, añade la leche caliente a la mezcla de huevo, batiendo constantemente.",
            "Vierte la mezcla de vuelta en la cacerola y cocina a fuego lento, removiendo constantemente, hasta que espese lo suficiente para cubrir el dorso de una cuchara.",
            "Cuela la mezcla para eliminar la vaina de vainilla y cualquier grumo.",
            "Añade la nata para montar y mezcla bien.",
            "Deja enfriar completamente antes de verter en una máquina de hacer helados. Sigue las instrucciones de la máquina para congelar el helado.",
            "Si no tienes una máquina de hacer helados, vierte la mezcla en un recipiente apto para congelador y congela, removiendo cada 30 minutos para romper los cristales de hielo hasta que esté firme."
        ],
        video: "https://www.youtube.com/embed/kFwUDz-VOhw?si=7ubcxcmGndROmz2v"
    },
    Mousse_chocolate: {
        titulo: "Mousse de chocolate",
        ingredientes: [
            "200g de chocolate negro",
            "4 huevos",
            "50g de azúcar",
            "200ml de nata para montar"
        ],
        pasos: [
            "Derrite el chocolate en un tazón resistente al calor, ya sea en el microondas o al baño maría, y deja enfriar un poco.",
            "Separa las yemas de las claras de los huevos.",
            "Bate las yemas con el azúcar hasta que estén pálidas y espesas.",
            "Incorpora el chocolate derretido a la mezcla de yemas.",
            "En otro bol, bate las claras a punto de nieve.",
            "En un tercer bol, bate la nata para montar hasta que forme picos suaves.",
            "Incorpora suavemente las claras batidas y la nata montada a la mezcla de chocolate, usando una espátula y movimientos envolventes para mantener el aire en la mezcla.",
            "Vierte la mousse en vasos individuales o en un bol grande y refrigera durante al menos 2 horas antes de servir."
        ],
        video: "https://www.youtube.com/embed/IF_ZnMKxtYw?si=KD2zvlGUo2oGCdMK"
    },
    // PLATILLOS TIPICOS
    Paella_espanola: {
        titulo: "Paella española",
        ingredientes: [
            "300g de arroz bomba",
            "300g de pollo troceado",
            "200g de langostinos",
            "100g de mejillones",
            "1 cebolla",
            "2 dientes de ajo",
            "Pimiento rojo y verde",
            "Tomate triturado",
            "Azafrán",
            "Caldo de pescado o pollo",
            "Guisantes",
            "Limón (para decorar)"
        ],
        pasos: [
            "Calienta un poco de aceite en una paellera y dora el pollo troceado.",
            "Añade la cebolla picada, el ajo y los pimientos cortados en tiras. Sofríe hasta que estén tiernos.",
            "Incorpora el tomate triturado y cocina por unos minutos.",
            "Añade el arroz y mezcla bien para que se impregne de los sabores.",
            "Vierte el caldo caliente (aproximadamente el doble del volumen del arroz) y el azafrán disuelto en un poco de caldo.",
            "Cocina a fuego medio-alto sin remover durante unos 10 minutos.",
            "Coloca los langostinos y los mejillones sobre el arroz, y añade los guisantes.",
            "Reduce el fuego y cocina por otros 10 minutos o hasta que el arroz esté en su punto y el líquido se haya absorbido.",
            "Deja reposar unos minutos antes de servir con rodajas de limón."
        ],
        video: "https://www.youtube.com/embed/DZ-DkAtQrGo?si=Hq1Uy0rk_JgpW59e"
    },
    Pad_Thai: {
        titulo: "Pad Thai tailandés",
        ingredientes: [
            "200g de fideos de arroz",
            "200g de gambas o pollo",
            "2 huevos",
            "Tofu",
            "Cebolla morada",
            "Brotes de soja",
            "Cacahuetes",
            "Salsa de tamarindo",
            "Salsa de pescado",
            "Azúcar",
            "Limón",
            "Cilantro"
        ],
        pasos: [
            "Cocina los fideos de arroz según las instrucciones del paquete, escurre y reserva.",
            "En un wok o sartén grande, calienta un poco de aceite y sofríe la cebolla morada picada.",
            "Añade las gambas o el pollo troceado y cocina hasta que estén hechos.",
            "Empuja los ingredientes a un lado del wok y rompe los huevos en el otro lado, removiendo para hacer un revuelto.",
            "Añade el tofu cortado en cubos y los brotes de soja, mezclando bien.",
            "Incorpora los fideos cocidos y añade la salsa de tamarindo, la salsa de pescado y el azúcar. Mezcla bien.",
            "Sirve el pad thai con cacahuetes picados, cilantro fresco y una rodaja de limón."
        ],
        video: "https://www.youtube.com/embed/MGmqUc8hJqI?si=IBeCVek68H0uGQSA"
    },
    Sushi: {
        titulo: "Sushi",
        ingredientes: [
            "Nori (algas)",
            "Arroz para sushi",
            "Vinagre de arroz",
            "Salmón o atún",
            "Aguacate",
            "Pepino",
            "Surimi (palitos de cangrejo)",
            "Wasabi",
            "Salsa de soja",
            "Jengibre encurtido"
        ],
        pasos: [
            "Cocina el arroz para sushi según las instrucciones del paquete. Una vez cocido, mezcla con el vinagre de arroz y deja enfriar.",
            "Coloca una hoja de nori sobre una esterilla de sushi.",
            "Extiende una capa de arroz sobre el nori, dejando un borde libre en un lado.",
            "Coloca tiras de pescado, aguacate, pepino o surimi en el centro del arroz.",
            "Enrolla el sushi con la ayuda de la esterilla, presionando firmemente.",
            "Corta el rollo en piezas con un cuchillo afilado.",
            "Sirve con wasabi, salsa de soja y jengibre encurtido."
        ],
        video: "https://www.youtube.com/embed/NTFjleENYEo?si=sLN0vDe4q3x9uwz0"
    },
   
    Curry: {
        titulo: "Curry indio de pollo",
        ingredientes: [
            "500g de pechugas de pollo",
            "2 cebollas",
            "3 dientes de ajo",
            "Jengibre fresco",
            "Tomate triturado",
            "Leche de coco",
            "Curry en polvo",
           "Cúrcuma",
            "Comino",
            "Cilantro fresco"
        ],
        pasos: [
            "En una sartén grande, calienta un poco de aceite y sofríe las cebollas picadas, el ajo y el jengibre rallado hasta que estén dorados.",
            "Añade las especias: curry en polvo, cúrcuma y comino, y cocina por unos minutos.",
            "Incorpora el tomate triturado y cocina hasta que la salsa espese.",
            "Añade el pollo troceado y cocina hasta que esté bien cocido.",
            "Vierte la leche de coco y mezcla bien. Cocina a fuego lento durante unos minutos más.",
            "Decora con cilantro fresco picado y sirve con arroz basmati o naan."
        ],
        video: "https://www.youtube.com/embed/o_PniN2lq4k?si=OyLbHURUVfJ0Cmg9"
    },
    Lasana: {
        titulo: "Lasaña de Carne",
        ingredientes: [
            "500g de pasta para lasaña (placas de lasaña)",
            "500g de carne molida de res",
            "1 cebolla grande, picada",
            "2 dientes de ajo, picados",
            "1 lata (400g) de tomate triturado",
            "2 cucharadas de pasta de tomate",
            "1 cucharadita de orégano seco",
            "1 cucharadita de albahaca seca",
            "Sal y pimienta al gusto",
            "2 tazas de salsa bechamel (puedes hacerla casera o usar una comprada)",
            "2 tazas de queso mozzarella rallado",
            "1/2 taza de queso parmesano rallado",
            "Aceite de oliva"
        ],
        pasos: [
            "Preparar la carne",
            "En una sartén grande, calienta un poco de aceite de oliva a fuego medio-alto.",
            "Agrega la cebolla picada y el ajo picado, y sofríe hasta que estén dorados y fragantes.",
            "Añade la carne molida y cocina hasta que esté bien dorada y cocida.",
            "Agrega el tomate triturado, la pasta de tomate, el orégano, la albahaca, la sal y la pimienta. Cocina a fuego medio durante unos 10-15 minutos, o hasta que la salsa espese. Retira del fuego y reserva.",
            "Preparar las placas de lasaña:",
            "Precalienta el horno según las instrucciones del paquete de lasaña.",
            "Cocina las placas de lasaña en agua hirviendo con sal durante el tiempo especificado en el paquete, o hasta que estén al dente. Escurre y enjuaga con agua fría para detener la cocción. Reserva.",
            "Montar la lasaña",
            "En un molde para horno, extiende una capa delgada de salsa de carne en el fondo.",
            "Coloca una capa de placas de lasaña sobre la salsa de carne.",
            "Cubre las placas de lasaña con otra capa de salsa de carne.",
            "Vierte un poco de salsa bechamel sobre la salsa de carne y espolvorea con queso mozzarella rallado.",
            "Repite el proceso de capas alternando entre placas de lasaña, salsa de carne, salsa bechamel y queso mozzarella rallado, hasta que todos los ingredientes se hayan utilizado y el molde esté lleno.",
            "Terminar la lasaña",
            "Espolvorea la parte superior de la lasaña con queso parmesano rallado.",
            "Hornear",
            "Cubre el molde con papel de aluminio y hornea en el horno precalentado durante 30 minutos.",
            "Retira el papel de aluminio y hornea por otros 10-15 minutos, o hasta que el queso esté dorado y burbujeante.",
            "Servir",
            "Deja reposar la lasaña durante unos minutos antes de cortarla en porciones.",
            "Sirve caliente y disfruta de esta deliciosa lasaña de carne."
        ],
        video: "https://www.youtube.com/embed/n4hJiXSIXR4?si=WdsSApTzn5ROo3Jq"
    },
    Ratatouille: {
        titulo: "Ratatouille",
        ingredientes: [
            "Berenjena",
            "Calabacín",
            "Pimiento rojo y verde",
            "Tomate",
            "Cebolla",
            "Ajo",
            "Tomate triturado",
            "Albahaca fresca",
            "Aceite de oliva",
            "Sal y pimienta"
        ],
        pasos: [
            "Precalienta el horno a 180°C (350°F).",
            "Corta la berenjena, el calabacín, los pimientos y los tomates en rodajas finas.",
            "En una sartén grande, sofríe la cebolla y el ajo picados hasta que estén tiernos.",
            "Añade el tomate triturado y cocina por unos minutos. Vierte esta mezcla en una fuente para horno.",
            "Coloca las rodajas de verduras de manera alternada y superpuestas en la fuente sobre la salsa.",
            "Rocía con aceite de oliva, salpica con sal y pimienta, y espolvorea con albahaca fresca.",
            "Cubre la fuente con papel aluminio y hornea durante 30 minutos.",
            "Retira el papel aluminio y hornea por otros 15-20 minutos, o hasta que las verduras estén tiernas.",
            "Sirve caliente como plato principal o acompañamiento."
        ],
        video: "https://www.youtube.com/embed/OeCUsncUPfo?si=vp3_-acw0KO_9-id"
    },
    // BEBIDAS
    margarita: {
        titulo: "Margarita",
        ingredientes: [
            "Tequila",
            "Triple sec",
            "Jugo de limón",
            "Sal"
        ],
        pasos: [
            "Mezclar tequila, triple sec y jugo de limón.",
            "Servir en un vaso con el borde salado.",
            "Añadir hielo al gusto."
        ],
        video: "https://www.youtube.com/embed/lDK9QqIzhwk"
    },
    margarita: {
        titulo: "Margarita",
        ingredientes: [
            "Tequila",
            "Triple sec",
            "Jugo de limón",
            "Sal"
        ],
        pasos: [
            "Mezclar tequila, triple sec y jugo de limón.",
            "Servir en un vaso con el borde salado.",
            "Añadir hielo al gusto."
        ],
        video: "https://www.youtube.com/embed/lDK9QqIzhwk"
    },
    margarita: {
        titulo: "Margarita",
        ingredientes: [
            "Tequila",
            "Triple sec",
            "Jugo de limón",
            "Sal"
        ],
        pasos: [
            "Mezclar tequila, triple sec y jugo de limón.",
            "Servir en un vaso con el borde salado.",
            "Añadir hielo al gusto."
        ],
        video: "https://www.youtube.com/embed/lDK9QqIzhwk"
    },
    margarita: {
        titulo: "Margarita",
        ingredientes: [
            "Tequila",
            "Triple sec",
            "Jugo de limón",
            "Sal"
        ],
        pasos: [
            "Mezclar tequila, triple sec y jugo de limón.",
            "Servir en un vaso con el borde salado.",
            "Añadir hielo al gusto."
        ],
        video: "https://www.youtube.com/embed/lDK9QqIzhwk"
    },

};

// Mostrar los detalles de la receta seleccionada
const mostrarDetallesReceta = () => {
    const detalleReceta = recetas[receta];
    if (detalleReceta) {
        document.getElementById('titulo-receta').innerText = detalleReceta.titulo;
        const detalleDiv = document.getElementById('detalle-receta');
        detalleDiv.innerHTML = `
            <div class="detalle-texto">
                <h3>Ingredientes</h3>
                <ul>
                    ${detalleReceta.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
                </ul>
                <h3>Pasos</h3>
                <ol>
                    ${detalleReceta.pasos.map(paso => `<li>${paso}</li>`).join('')}
                </ol>
            </div>
            <div class="detalle-video">
                <h3>Video Tutorial</h3>
                <iframe src="${detalleReceta.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            `;
           
    } else {
        document.getElementById('detalle-receta').innerText = 'Receta no encontrada.';
    }
};

// Ejecutar la función para mostrar los detalles de la receta
mostrarDetallesReceta();