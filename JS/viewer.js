import { projectArray } from "./projects.js";
const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get('id');
const title = "/ " + projectArray[id].title;
document.getElementById("title").innerText = title;
//const model = projectArray[id].model;
const model = `../PROJECTS/${id}/model.ifc`;

import { Color } from 'three';
import { IfcViewerAPI } from "web-ifc-viewer";
const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("../node_modules/web-ifc/");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}
loadIfc(model);