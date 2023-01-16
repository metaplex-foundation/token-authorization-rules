/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
/**
 * This type is used to derive the {@link WriteToBufferArgs} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link WriteToBufferArgs} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type WriteToBufferArgsRecord = {
  V1: { serializedRuleSet: Uint8Array; overwrite: boolean };
};

/**
 * Union type respresenting the WriteToBufferArgs data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isWriteToBufferArgs*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type WriteToBufferArgs = beet.DataEnumKeyAsKind<WriteToBufferArgsRecord>;

export const isWriteToBufferArgsV1 = (
  x: WriteToBufferArgs,
): x is WriteToBufferArgs & { __kind: 'V1' } => x.__kind === 'V1';

/**
 * @category userTypes
 * @category generated
 */
export const writeToBufferArgsBeet = beet.dataEnum<WriteToBufferArgsRecord>([
  [
    'V1',
    new beet.FixableBeetArgsStruct<WriteToBufferArgsRecord['V1']>(
      [
        ['serializedRuleSet', beet.bytes],
        ['overwrite', beet.bool],
      ],
      'WriteToBufferArgsRecord["V1"]',
    ),
  ],
]) as beet.FixableBeet<WriteToBufferArgs, WriteToBufferArgs>;