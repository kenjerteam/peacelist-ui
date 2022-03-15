export class Resource {

    id;
    type;
    content;
    approved;

    constructor(id, type, content, approved) {
        this.id = id;
        this.type = type;
        this.content = content;
        this.approved = approved
    }
}

class ResourceType {
    type
}