export const createTasker = function() {
  let tasks = []

  function add(task) {
    if (typeof task !== 'function') return
    tasks = [...tasks, task]
  }

  function getTasks () {
    return tasks
  }

  function remove(task) {
    tasks = tasks.filter(function(_task) {
      return task !== _task
    })
  }

  function pipe(initialValue) {
    return tasks.reduce(function (initialValue, task) {
      return task(initialValue)
    }, initialValue)
  }

  function run() {
    tasks.forEach(function (task) {
      task()
    })
  }

  return {
    getTasks,
    add,
    remove,
    pipe,
    run
  }
}
