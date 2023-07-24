import { faLaughSquint } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LaughSquint icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LaughSquint = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLaughSquint} {...props} />;
};

export default LaughSquint;
