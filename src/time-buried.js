class TimeBuried {
    constructor({ logger = console } = {}) {
        this.timers = {};
        this.logger = logger;
    }

    start(name) {
        this.timers[name] = {};
        this.timers[name].startTimestamp = Date.now();
    }

    end(name) {
        const endTimestamp = Date.now();
        const startTimestamp = this.timers[name].startTimestamp;
        const diff = endTimestamp - startTimestamp;
        this.timers[name].endTimestamp = endTimestamp;
        this.timers[name].diff = diff;
    }

    getValue(name) {
        const value = this.timers[name];
        if (value) return value;
        else return undefined;
    }

    getAllValue(){
        return this.timers;
    }

    print(name) {
        if (!name) {
            this.printAll();
        } else {
            const timer = this.timers[name];
            this.logger.info('Time Recorder:', `---- ${name}: ${timer.diff}ms`);
        }
    }

    printAll() {
        Object.keys(this.timers).forEach(name => this.print(name));
    }
}

module.exports = TimeBuried;