import { faWheatAwnCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WheatAwnCircleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WheatAwnCircleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWheatAwnCircleExclamation} {...props} />;
};

export default WheatAwnCircleExclamation;
