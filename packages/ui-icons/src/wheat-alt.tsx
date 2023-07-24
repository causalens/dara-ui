import { faWheatAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WheatAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WheatAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWheatAlt} {...props} />;
};

export default WheatAlt;
