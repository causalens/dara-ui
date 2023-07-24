import { faCircleRadiation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleRadiation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleRadiation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleRadiation} {...props} />;
};

export default CircleRadiation;
