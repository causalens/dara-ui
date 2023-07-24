import { faRulerVertical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RulerVertical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RulerVertical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRulerVertical} {...props} />;
};

export default RulerVertical;
