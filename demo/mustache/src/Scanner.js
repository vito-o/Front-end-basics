export default class Scanner {

    constructor(templateStr) {
        this.templateStr = templateStr;

        this.pos = 0;

        this.tail = templateStr;
    }

    scan(tag) {
        if(this.tail.indexOf(tag) == 0) {
            this.pos += tag.length;
            this.tail = this.templateStr.substring(this.pos);
        }
    }

    scanUtil(stopTag) {
        const pos_backup = this.pos;
        while(this.tail.indexOf(stopTag) != 0 && !this.eos()) {
            this.pos++;
            this.tail = this.templateStr.substring(this.pos)
        }

        return this.templateStr.substring(pos_backup, this.pos)
    }

    //指针是否已经到头了
    eos() {
        return this.pos >= this.templateStr.length;
    }

}