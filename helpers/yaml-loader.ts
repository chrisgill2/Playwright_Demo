import * as yaml from 'js-yaml';
import * as fs from 'fs';

export class YamlLoader {
    private yamlFile: string;

    constructor(fileName: string) {
        this.yamlFile = fileName;
    }

    public getData() {
        var indentedJson: any;
        try {
            const data = yanl.load(fs.readFileSync("testdata/" + this.yamlFile, "utf-8"));
            indentedJson = JSON.stringify(data, null, 4);
        } catch (e) {
            console.log(e);
        }
        return JSON.parse(indentedJson);
    }
}