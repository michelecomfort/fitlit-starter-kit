import { assert } from 'chai';
import User from '../src/User';
import { userData, hydrationData, sleepData, activityData } from '../src/sampleData.js'

describe('User Repository', function() {
  let user1;
  let user2;
  let user3;
  let user4;
  let hydration1

  beforeEach(function() {

    user1 = new User()
    user2 = new User()
    user3 = new User()
    user4 = new User()
    // hydration1 = new Hydration()
  });
  
  it('should be a function', function() {
    assert.isFunction(User);
  });

  it('should be an instance of User', function() {
    assert.instanceOf(user1, User)
  })

  it('should have an no ID, no name, no address and no email by default', function() {
    assert.equal(user1.id, null)
    assert.equal(user1.name, null)
    assert.equal(user1.address, null)
    assert.equal(user1.email, null)
  })

  it('shoudl initialize a new user', function() {
    user1.initializeUser(userData[0])
    assert.equal(user1.id, 1)
    assert.equal(user1.name, 'Markus Rossio')
    assert.equal(user1.address, '123 Main St Wisconsin')
    assert.equal(user1.email, 'markus@email.com')
    assert.equal(user1.strideLength, 5.1)
    assert.equal(user1.dailyStepGoal, 10000)
    assert.deepEqual(user1.friends, [2, 3, 4])
    assert.equal(user1.friends.length, 3)
  })

  it('should retrieve hydration data', function() {
    user1.retrieveHydrationData()
    assert.equal(user1.hydrationData, )
  })

});

//should create an instance of hydration
//should create an instance of sleep
//should create an instance of activity(steps)
