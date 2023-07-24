import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChampagneGlasses icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChampagneGlasses = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChampagneGlasses} {...props} />;
};

export default ChampagneGlasses;
