module.exports={
	tasks:[
		{id:1, name: "Pay bills", description: "Too many of them", importance: 2, dueDate: "2021-10-10, 13:00", isCompleted: false},
		{id:2, name: "Buy new car", description: "Prefer electric", importance: 1, dueDate: "2021-10-30, 18:00", isCompleted: false},
		{id:3, name: "Sell current car", description: "Do not accept too small offers", importance: 0, dueDate: "2022-01-01, 11:00", isCompleted: false}
	],

	getAll(){
		return this.tasks;
	},
	get(id){
		let task = this.tasks.find(b => b.id == id);
		return task;
	},
	create(task){
		if (!task.id || task.id < 0) return null;
		let maxId=this.tasks.reduce((a,b) => a.id > b.id ? a : b, {id:0}).id; // Select new ID for task
		task.id=maxId+1;
		this.tasks.push(task);
		return task;
	},
	update(task){
		let t = this.get(task.id);
		if (!t) return;
		Object.assign(t, task);
		return t;
	},
	delete(id){
		let index = this.tasks.findIndex(b => b.id == id);
		if (index < 0) return;
		this.tasks.splice(index, 1);
		return true;
	}
}