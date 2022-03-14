export class Resource {

    type;
    content;
    approved;

    constructor(type, content, approved) {
        this.type = type;
        this.content = content;
        this.approved = approved
    }
}

class ResourceType {
    type
}