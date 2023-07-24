import { faGuitar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Guitar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Guitar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGuitar} {...props} />;
};

export default Guitar;
