AFRAME.registerComponent("info-banner", {
    schema: {
        itemId: {default: "", type: "string"}
    },
    update: function() {
        this.createBanner();
    },
    createBanner: function() {
        posterInfo = {
            "opmistic-reader": {
                banner_url: "./assets/opmistic-reader-bg.png",
                title: "Opmistic Reader",
                released_year: "2021",
                description:
                  "Dokja was an average office worker whose sole interest was reading his favorite web novel 'Three Ways to Survive the Apocalypse.' But when the novel suddenly becomes reality, he is the only person who knows how the world will end. Armed with this realization, Dokja uses his understanding to change the course of the story, and the world, as he knows it."
            },
            unodinary: {
                banner_url: "./assets/unodinary-bg.png",
                title: "unOdinary",
                released_year: "2023",
                description: 
                  "Nobody paid much attention to John – just a normal teenager at a high school where the social elite happen to possess unthinkable powers and abilities. But John’s got a secret past that threatens to bring down the school’s whole social order – and much more. Fulfilling his destiny won’t be easy though, because there are battles, frenemies and deadly conspiracies around every corner."
            },
            "jungle-juice": {
                banner_url: "./assets/jungle-juice-bg.png",
                title: "Jungle Juice",
                released_year: "2021",
                description:
                  "Suchan Jang is an extraordinary college student at the top of the social food chain. But underneath the perfect facade, he hides a pair of insect wings that suddenly grew when he used a mysterious bug spray called 'Jungle Juice'. Suchan's life crumbles when he bares his wings to the world to save someone's life. When all hope seems lost, Suchan stumbles upon a hidden world of insect humans where everyone is accepted for what they are. But the law of the jungle governs this secret society and all must fend for themselves in order to survive."
            },
            "duty-after-school": {
                banner_url: "./assets/das.png",
                title: "Duty After School",
                released_year: "2014",
                description:
                  "What would you do if your school's extracurricular activity was a mandatory military service amidst an actual war? A class of students is turned into a platoon of soldiers to fight against unknown slime-like objects."
            },
        };
        const {itemId} = this.data;
        const fadeBackgroundEl = document.querySelector("#fadeBackground");
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", `${itemId}-banner`);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 0.9,
            height: 1,
        });
        entityEl.setAttribute("material", {color: "#000"});
        entityEl.setAttribute("position", {x: 0, y: 0.1, z:-1});
        const item = posterInfo[itemId];
        const imageEl = this.createImageEl(item);
        const titleEl = this.createTitleEl(item);
        const descriptionEl = this.createDescriptionEl(item);

        entityEl.appendChild(imageEl);
        entityEl.appendChild(titleEl);
        entityEl.appendChild(descriptionEl);

        fadeBackgroundEl.appendChild(entityEl);
    },

    createImageEl: function(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 0.85,
            height: 0.4,
        });
        entityEl.setAttribute("material", {src: item.banner_url});
        entityEl.setAttribute("position",{x:0, y: 0.3,z:0.05});
        return entityEl;
    },

    createTitleEl: function(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
            color: "#fff",
            shader: "msdf",
            anchor: "left",
            width: 1.2,
            height: 2,
            font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
            value: `${item.title} (${item.released_year})`,
        });
        entityEl.setAttribute("position",{x:-0.4, y:0.02 ,z:0.05});
        return entityEl;
    },
    
    createDescriptionEl: function(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
            color: "#fff",
            shader: "msdf",
            anchor: "left",
            font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
            width: 0.65,
            height: 2,
            value: item.description,
        });
        entityEl.setAttribute("position",{x:-0.4, y:-0.24,z:0.05});
        return entityEl;
    },
})