import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * IdCardAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const IdCardAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faIdCardAlt} {...props} />;
};

export default IdCardAlt;
