Events.on(ClientLoadEvent, () => {
    const planeth = new Planet("planeth", Planets.sun, 1, 1);
    planeth.generator = new SerpuloPlanetGenerator();
    planeth.mesh = new HexMesh(routros, 5);
    planeth.orbitRadius = 10;
    planeth.orbitTime = 1.5 * 60;
    planeth.rotateTime = 30;
    planeth.bloom = true;
    planeth.accessible = true;
    planeth.startSector = 1;
    planeth.hasAtmosphere = true;
    planeth.atmosphereColor = Liquids.cryofluid.color;
    planeth.atmosphereRadIn = 0.1;
    planeth.atmosphereRadOut = 0.3;
    planeth.alwaysUnlocked = true;
    planeth.localizedName = "Planet h";

    for(var i = 0; i < 31; i++){
        var h = new SectorPreset("h" + i, planeth, i);
        h.localizedName = "h" + i;
        h.alwaysUnlocked = false;
    };
});
