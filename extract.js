const fs = require('fs');
const { Project } = require('ts-morph');
const project = new Project();
project.addSourceFileAtPath('src/data/mockData.ts');
const src = project.getSourceFile('src/data/mockData.ts');
function extract(name) {
    const decl = src.getVariableDeclaration(name).getInitializer();
    return decl.getElements().map(e => ({
        id: e.getProperty('id')?.getInitializer()?.getText(), 
        title: e.getProperty('title')?.getInitializer()?.getText(), 
        name: e.getProperty('name')?.getInitializer()?.getText()
    }));
}
console.log('DOCTORS:', extract('DOCTORS'));
console.log('BLOGS:', extract('BLOG_POSTS'));
console.log('EVENTS:', extract('EVENTS_DATA'));
