/**
 * Created by joy on 12/10/2017.
 */
import AssertUtil from './common/utils/AssertUtil'

Number.prototype.equals = function (val) {
  AssertUtil.isType(val, 'number')
  return this === val
}


