import sharedb from './sharedb.js';
import addedDiff from './added.js';
import deletedDiff from './deleted.js';
import updatedDiff from './updated.js';

const detailedDiff = (lhs, rhs) => ({
  added: addedDiff(lhs, rhs),
  deleted: deletedDiff(lhs, rhs),
  updated: updatedDiff(lhs, rhs),
  sharedb: sharedb(lhs, rhs)
});

export default detailedDiff;
