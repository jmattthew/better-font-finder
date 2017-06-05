// define font attributes

/*

TEMPLATE

Notes:
This list may only contain fonts avialable at Google Fonts.
Every unique family must have one and only one font-weight where primary = true.
The primary weight should be 400 or whatever is closest to that.

To do: Refactor database to use one entry per family, and available weights per family.

fonts[fonts.length] = {
	cap: "",
	contrast: "",
	apparentWeight: "00",
	cssWeight: "00",
	primary: false,
	family: ""
};

*/

var fonts = [];

fonts[fonts.length] = {
	cap: "round",
	contrast: "hybrid",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Berkshire Swash"
};
/* EXCLUDED BECAUSE IT'S IDENTICAL TO CANTATA ONE
fonts[fonts.length] = {
	cap: "slab",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Sree Krushnadevaraya"
};
*/
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Sorts Mill Goudy"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Slabo 13px"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Radley"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "ultra",
	apparentWeight: "700",
	cssWeight: "400",
	primary: true,
	family: "Poller One"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "200",
	cssWeight: "400",
	primary: true,
	family: "Poiret One"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Podkova"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "500",
	cssWeight: "500",
	primary: false,
	family: "Podkova"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "600",
	cssWeight: "600",
	primary: false,
	family: "Podkova"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Podkova"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "800",
	cssWeight: "800",
	primary: false,
	family: "Podkova"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "hybrid",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Overlock"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "ultra",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Old Standard TT"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "ultra",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Old Standard TT"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "200",
	cssWeight: "200",
	primary: false,
	family: "Neuton"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "300",
	cssWeight: "300",
	primary: true,
	family: "Neuton"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: false,
	family: "Neuton"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Neuton"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "800",
	cssWeight: "800",
	primary: false,
	family: "Neuton"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "200",
	cssWeight: "200",
	primary: false,
	family: "Martel"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "300",
	cssWeight: "300",
	primary: false,
	family: "Martel"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Martel"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "600",
	cssWeight: "600",
	primary: false,
	family: "Martel"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Martel"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "800",
	cssWeight: "800",
	primary: false,
	family: "Martel"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "900",
	cssWeight: "900",
	primary: false,
	family: "Martel"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Marcellus"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "hybrid",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Macondo"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Linden Hill"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "ultra",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Italiana"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Crimson Text"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "600",
	cssWeight: "600",
	primary: false,
	family: "Crimson Text"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Crimson Text"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "stressed",
	apparentWeight: "500",
	cssWeight: "400",
	primary: true,
	family: "Cantata One"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "hybrid",
	apparentWeight: "700",
	cssWeight: "400",
	primary: true,
	family: "Bigshot One"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Autour One"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "100",
	cssWeight: "100",
	primary: false,
	family: "Yantramanav"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "300",
	cssWeight: "300",
	primary: false,
	family: "Yantramanav"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Yantramanav"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "500",
	cssWeight: "500",
	primary: false,
	family: "Yantramanav"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Yantramanav"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "900",
	cssWeight: "900",
	primary: false,
	family: "Yantramanav"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Arapey"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Noto Serif"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Noto Serif"
};







fonts[fonts.length] = {
	cap: "slab",
	contrast: "ultra",
	apparentWeight: "800",
	cssWeight: "400",
	primary: true,
	family: "Abril Fatface"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "stressed",
	apparentWeight: "600",
	cssWeight: "400",
	primary: true,
	family: "Aclonica"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Alef"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "unstressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Alef"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "unstressed",
	apparentWeight: "600",
	cssWeight: "400",
	primary: true,
	family: "Amaranth"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "unstressed",
	apparentWeight: "800",
	cssWeight: "700",
	primary: false,
	family: "Amaranth"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Arya"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "stressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Arya"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Belleza"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "800",
	cssWeight: "400",
	primary: true,
	family: "Bevan"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "200",
	cssWeight: "200",
	primary: false,
	family: "BioRhyme"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "300",
	cssWeight: "300",
	primary: false,
	family: "BioRhyme"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "BioRhyme"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "BioRhyme"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "800",
	cssWeight: "800",
	primary: false,
	family: "BioRhyme"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Bitter"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "unstressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Bitter"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "hybrid",
	apparentWeight: "500",
	cssWeight: "400",
	primary: true,
	family: "Cagliostro"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Capriola"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "stressed",
	apparentWeight: "800",
	cssWeight: "400",
	primary: true,
	family: "Chango"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Cherry Swash"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Cherry Swash"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "300",
	cssWeight: "300",
	primary: false,
	family: "Comfortaa"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Comfortaa"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Comfortaa"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Corben"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "stressed",
	apparentWeight: "800",
	cssWeight: "700",
	primary: false,
	family: "Corben"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Coustard"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "stressed",
	apparentWeight: "600",
	cssWeight: "400",
	primary: true,
	family: "Croissant One"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "600",
	cssWeight: "400",
	primary: true,
	family: "Days One"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "hybrid",
	apparentWeight: "700",
	cssWeight: "400",
	primary: true,
	family: "Denk One"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "200",
	cssWeight: "200",
	primary: false,
	family: "Dosis"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "300",
	cssWeight: "300",
	primary: false,
	family: "Dosis"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Dosis"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "500",
	cssWeight: "500",
	primary: false,
	family: "Dosis"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "600",
	cssWeight: "600",
	primary: false,
	family: "Dosis"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Dosis"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "800",
	cssWeight: "800",
	primary: false,
	family: "Dosis"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "El Messiri"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "stressed",
	apparentWeight: "500",
	cssWeight: "500",
	primary: false,
	family: "El Messiri"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "stressed",
	apparentWeight: "600",
	cssWeight: "600",
	primary: false,
	family: "El Messiri"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "hybrid",
	apparentWeight: "800",
	cssWeight: "400",
	primary: true,
	family: "Fascinate"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "unstressed",
	apparentWeight: "100",
	cssWeight: "300",
	primary: false,
	family: "Flamenco"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Flamenco"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "800",
	cssWeight: "400",
	primary: true,
	family: "Fredoka One"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "hybrid",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Glass Antiqua"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "500",
	cssWeight: "400",
	primary: true,
	family: "Happy Monkey"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "100",
	cssWeight: "100",
	primary: false,
	family: "Lato"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "300",
	cssWeight: "300",
	primary: false,
	family: "Lato"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Lato"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Lato"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "900",
	cssWeight: "900",
	primary: false,
	family: "Lato"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Libre Baskerville"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Libre Baskerville"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "ultra",
	apparentWeight: "700",
	cssWeight: "400",
	primary: true,
	family: "Limelight"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Lora"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "stressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Lora"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Mallanna"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "stressed",
	apparentWeight: "500",
	cssWeight: "400",
	primary: true,
	family: "Marmelad"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "200",
	cssWeight: "400",
	primary: true,
	family: "Nixie One"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "500",
	cssWeight: "400",
	primary: true,
	family: "NTR"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Philosopher"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "stressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Philosopher"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Proza Libre"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "stressed",
	apparentWeight: "500",
	cssWeight: "500",
	primary: false,
	family: "Proza Libre"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "stressed",
	apparentWeight: "600",
	cssWeight: "600",
	primary: false,
	family: "Proza Libre"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "stressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Proza Libre"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "stressed",
	apparentWeight: "800",
	cssWeight: "800",
	primary: false,
	family: "Proza Libre"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "300",
	cssWeight: "300",
	primary: false,
	family: "Quicksand"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Quicksand"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "500",
	cssWeight: "500",
	primary: false,
	family: "Quicksand"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Quicksand"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "100",
	cssWeight: "100",
	primary: false,
	family: "Raleway"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "200",
	cssWeight: "200",
	primary: false,
	family: "Raleway"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "300",
	cssWeight: "300",
	primary: false,
	family: "Raleway"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Raleway"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "500",
	cssWeight: "500",
	primary: false,
	family: "Raleway"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "600",
	cssWeight: "600",
	primary: false,
	family: "Raleway"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Raleway"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "800",
	cssWeight: "800",
	primary: false,
	family: "Raleway"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "900",
	cssWeight: "900",
	primary: false,
	family: "Raleway"
};
fonts[fonts.length] = {
	cap: "classic",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Rhodium Libre"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "100",
	cssWeight: "100",
	primary: false,
	family: "Roboto Slab"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "300",
	cssWeight: "300",
	primary: false,
	family: "Roboto Slab"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Roboto Slab"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "500",
	cssWeight: "500",
	primary: false,
	family: "Roboto Slab"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Roboto Slab"
};
fonts[fonts.length] = {
	cap: "slab",
	contrast: "unstressed",
	apparentWeight: "900",
	cssWeight: "900",
	primary: false,
	family: "Roboto Slab"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Ruluko"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "unstressed",
	apparentWeight: "300",
	cssWeight: "400",
	primary: true,
	family: "Scope One"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "stressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Sofia"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "hybrid",
	apparentWeight: "800",
	cssWeight: "400",
	primary: true,
	family: "Titan One"
};
fonts[fonts.length] = {
	cap: "othercap",
	contrast: "stressed",
	apparentWeight: "800",
	cssWeight: "400",
	primary: true,
	family: "Ultra"
};
fonts[fonts.length] = {
	cap: "round",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Varela Round"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "100",
	cssWeight: "100",
	primary: false,
	family: "Work Sans"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "200",
	cssWeight: "200",
	primary: false,
	family: "Work Sans"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "300",
	cssWeight: "300",
	primary: false,
	family: "Work Sans"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "400",
	cssWeight: "400",
	primary: true,
	family: "Work Sans"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "500",
	cssWeight: "500",
	primary: false,
	family: "Work Sans"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "600",
	cssWeight: "600",
	primary: false,
	family: "Work Sans"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "700",
	cssWeight: "700",
	primary: false,
	family: "Work Sans"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "800",
	cssWeight: "800",
	primary: false,
	family: "Work Sans"
};
fonts[fonts.length] = {
	cap: "none",
	contrast: "unstressed",
	apparentWeight: "900",
	cssWeight: "900",
	primary: false,
	family: "Work Sans"
};





