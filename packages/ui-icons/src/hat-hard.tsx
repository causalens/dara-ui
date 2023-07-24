import { faHatHard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HatHard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HatHard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHatHard} {...props} />;
};

export default HatHard;
