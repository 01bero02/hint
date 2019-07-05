// autogenerated by scripts/create/create-metas.js
import { Category } from 'hint/dist/src/lib/enums/category';
import { HintScope } from 'hint/dist/src/lib/enums/hint-scope';
import { HintMetadata } from 'hint/dist/src/lib/types';

import { getMessage } from '../i18n.import';

const meta: HintMetadata = {
    docs: {
        category: Category.accessibility,
        description: getMessage('aria_description', 'en'),
        name: getMessage('aria_name', 'en')
    },
    /* istanbul ignore next */
    getDescription(language: string) {
        return getMessage('aria_description', language);
    },
    /* istanbul ignore next */
    getName(language: string) {
        return getMessage('aria_name', language);
    },
    id: 'axe/aria',
    schema: [{
        additionalProperties: false,
        properties: {
            'aria-allowed-attr': { enum: ['off', 'warning', 'error'], type: 'string' },
            'aria-allowed-role': { enum: ['off', 'warning', 'error'], type: 'string' },
            'aria-dpub-role-fallback': { enum: ['off', 'warning', 'error'], type: 'string' },
            'aria-hidden-body': { enum: ['off', 'warning', 'error'], type: 'string' },
            'aria-input-field-name': { enum: ['off', 'warning', 'error'], type: 'string' },
            'aria-required-attr': { enum: ['off', 'warning', 'error'], type: 'string' },
            'aria-required-children': { enum: ['off', 'warning', 'error'], type: 'string' },
            'aria-required-parent': { enum: ['off', 'warning', 'error'], type: 'string' },
            'aria-roles': { enum: ['off', 'warning', 'error'], type: 'string' },
            'aria-toggle-field-name': { enum: ['off', 'warning', 'error'], type: 'string' },
            'aria-valid-attr': { enum: ['off', 'warning', 'error'], type: 'string' },
            'aria-valid-attr-value': { enum: ['off', 'warning', 'error'], type: 'string' }
        }
    }],
    scope: HintScope.any
};

export default meta;
