import { createTasker } from './tasker'

describe('tasker creator', function () {
  it('should create a new tasker object', function () {
    const tasker = createTasker()

    expect(tasker.getTasks()).toEqual([])
    expect(typeof tasker.add).toBe('function')
    expect(typeof tasker.remove).toBe('function')
    expect(typeof tasker.pipe).toBe('function')
    expect(typeof tasker.run).toBe('function')
  })

  it('should create a new tasker object', function () {
    const tasker = createTasker()
    function task (name) {
      return 'hellowork ' + name
    }
    tasker.add(task)

    expect(tasker.getTasks()[0]).toEqual(task)
  })
})
