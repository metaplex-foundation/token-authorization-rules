import {
  Context,
  PublicKeyBase58,
  PublicKeyInput,
  Serializer,
  base58,
  base58PublicKey,
} from '@metaplex-foundation/umi';
import { wrapSerializerInRuleHeaderV2 } from './ruleHeader';
import { RuleTypeV2 } from './ruleType';
import { RuleV2, isRuleV2 } from './rule';
import { RuleV1 } from '../v1';

export type PubkeyMatchRuleV2 = {
  type: 'PubkeyMatch';
  field: string;
  publicKey: PublicKeyBase58;
};

export const pubkeyMatchV2 = (
  field: string,
  publicKey: PublicKeyInput
): PubkeyMatchRuleV2 => ({
  type: 'PubkeyMatch',
  publicKey: base58PublicKey(publicKey),
  field,
});

export const getPubkeyMatchRuleV2Serializer = (
  context: Pick<Context, 'serializer'>
): Serializer<PubkeyMatchRuleV2> => {
  const s = context.serializer;
  return wrapSerializerInRuleHeaderV2(
    context,
    RuleTypeV2.PubkeyMatch,
    s.struct([
      ['publicKey', s.string({ encoding: base58, size: 32 })],
      ['field', s.string({ size: 32 })],
    ])
  );
};

export const isPubkeyMatchRuleV2 = (
  rule: RuleV1 | RuleV2
): rule is PubkeyMatchRuleV2 => isRuleV2(rule) && rule.type === 'PubkeyMatch';
