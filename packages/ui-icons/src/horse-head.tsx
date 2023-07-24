import { faHorseHead } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HorseHead icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HorseHead = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHorseHead} {...props} />;
};

export default HorseHead;
