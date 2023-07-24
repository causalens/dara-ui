import { faSpellCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SpellCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SpellCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSpellCheck} {...props} />;
};

export default SpellCheck;
