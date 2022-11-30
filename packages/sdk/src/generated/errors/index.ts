/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number };
type MaybeErrorWithCode = ErrorWithCode | null | undefined;

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map();
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map();

/**
 * ErrorName: 'Error message'
 *
 * @category Errors
 * @category generated
 */
export class ErrorNameError extends Error {
  readonly code: number = 0x0;
  readonly name: string = 'ErrorName';
  constructor() {
    super('Error message');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ErrorNameError);
    }
  }
}

createErrorFromCodeLookup.set(0x0, () => new ErrorNameError());
createErrorFromNameLookup.set('ErrorName', () => new ErrorNameError());

/**
 * NumericalOverflow: 'Numerical Overflow'
 *
 * @category Errors
 * @category generated
 */
export class NumericalOverflowError extends Error {
  readonly code: number = 0x1;
  readonly name: string = 'NumericalOverflow';
  constructor() {
    super('Numerical Overflow');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NumericalOverflowError);
    }
  }
}

createErrorFromCodeLookup.set(0x1, () => new NumericalOverflowError());
createErrorFromNameLookup.set('NumericalOverflow', () => new NumericalOverflowError());

/**
 * DataTypeMismatch: 'Data type mismatch'
 *
 * @category Errors
 * @category generated
 */
export class DataTypeMismatchError extends Error {
  readonly code: number = 0x2;
  readonly name: string = 'DataTypeMismatch';
  constructor() {
    super('Data type mismatch');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DataTypeMismatchError);
    }
  }
}

createErrorFromCodeLookup.set(0x2, () => new DataTypeMismatchError());
createErrorFromNameLookup.set('DataTypeMismatch', () => new DataTypeMismatchError());

/**
 * IncorrectOwner: 'Incorrect account owner'
 *
 * @category Errors
 * @category generated
 */
export class IncorrectOwnerError extends Error {
  readonly code: number = 0x3;
  readonly name: string = 'IncorrectOwner';
  constructor() {
    super('Incorrect account owner');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IncorrectOwnerError);
    }
  }
}

createErrorFromCodeLookup.set(0x3, () => new IncorrectOwnerError());
createErrorFromNameLookup.set('IncorrectOwner', () => new IncorrectOwnerError());

/**
 * PayloadVecIndexError: 'Could not index into PayloadVec'
 *
 * @category Errors
 * @category generated
 */
export class PayloadVecIndexErrorError extends Error {
  readonly code: number = 0x4;
  readonly name: string = 'PayloadVecIndexError';
  constructor() {
    super('Could not index into PayloadVec');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, PayloadVecIndexErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0x4, () => new PayloadVecIndexErrorError());
createErrorFromNameLookup.set('PayloadVecIndexError', () => new PayloadVecIndexErrorError());

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code);
  return createError != null ? createError() : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name);
  return createError != null ? createError() : null;
}
